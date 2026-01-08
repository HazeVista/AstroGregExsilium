ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu
    const UV = 384000
    const evenUV = 400000

    //#region uhv parts
    gt.assembler('uhv_voltage_coil')
        .itemInputs('16x astrogreg:fine_electrolyte_wire')
        .itemInputs('astrogreg:magnetic_neutronium_rod')
        .itemOutputs('gtceu:uhv_voltage_coil')
        .addMaterialInfo(true)
        .duration(200)
        .circuit(1)
        .EUt(1966080)
        
    gt.assembler('uhv_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump')
        .itemInputs('2x #gtceu:circuits/uhv')
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .addMaterialInfo(true)
        .circuit(1)
        .duration(50)
        .EUt(1966080)

    gt.assembler('uhv_machine_hull')
        .itemInputs('gtceu:uhv_machine_casing', '2x gtceu:europium_single_cable')
        .inputFluids('astrogreg:polyamide_imide 288')
        .itemOutputs('gtceu:uhv_machine_hull')
        .addMaterialInfo(true)
        .duration(50)
        .EUt(16)

    gt.shaped('gtceu:uhv_machine_hull', [
        'ABA',
        'CDC'
    ], {
        A: 'astrogreg:polyamide_imide_plate',
        B: 'gtceu:neutronium_plate',
        C: 'gtceu:europium_single_cable',
        D: 'gtceu:uhv_machine_casing'
    })

    gt.shaped('gtceu:uhv_muffler_hatch', [
        'AB',
        'CD'
    ], {
        A: 'gtceu:uhv_machine_hull',
        B: 'gtceu:uhv_electric_motor',
        C: 'astrogreg:polyamide_imide_normal_fluid_pipe',
        D: 'astrogreg:abyssalloy_239_rotor'
    })
    .addMaterialInfo()

    gt.shaped('gtceu:uhv_rotor_holder', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:small_neutronium_gear',
        B: 'astrogreg:abyssalloy_239_gear',
        C: 'gtceu:uhv_machine_hull'
    })
    .addMaterialInfo()

    gt.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:neutronium_frame')
        .itemInputs('6x gtceu:neutronium_plate')
        .itemInputs('2x gtceu:gravi_star')
        .itemInputs('2x gtceu:uhv_emitter')
        .itemInputs('2x #gtceu:circuits/uhv')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('4x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_field_generator')
        .addMaterialInfo(true)
        .duration(600)
        .EUt(evenUV)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_field_generator`))
                .dataStack('gtceu:data_module')
                .CWUt(128, 256000)
                .EUt(488000)
        )  
   
    gt.assembly_line('uhv_electric_motor')
        .itemInputs('astrogreg:long_magnetic_neutronium_rod')
        .itemInputs('4x astrogreg:long_electrolyte_rod')
        .itemInputs('4x gtceu:neutronium_sleeve')
        .itemInputs('4x astrogreg:electrolyte_ring')
        .itemInputs('4x astrogreg:electrolyte_round')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:lubricant')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(UV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_electric_motor`))
                .dataStack('gtceu:data_module')
                .CWUt(96, 196000)
                .EUt(488000)
        )   
   
    gt.assembly_line('uhv_electric_piston')
        .itemInputs('gtceu:uhv_electric_motor')
        .itemInputs('4x gtceu:neutronium_plate')
        .itemInputs('4x astrogreg:electrolyte_ring')
        .itemInputs('16x astrogreg:electrolyte_round')
        .itemInputs('4x gtceu:neutronium_sleeve')
        .itemInputs('astrogreg:abyssalloy_239_gear')
        .itemInputs('2x astrogreg:small_abyssalloy_239_gear')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:lubricant')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_electric_piston`))
                .dataStack('gtceu:data_module')
                .CWUt(112, 200000)
                .EUt(488000)
        )  
           
    gt.assembly_line('uhv_conveyor_module')
        .itemInputs('2x gtceu:uhv_electric_motor')
        .itemInputs('4x gtceu:neutronium_sleeve')
        .itemInputs('4x astrogreg:electrolyte_ring')
        .itemInputs('16x astrogreg:electrolyte_round')
        .itemInputs('4x astrogreg:abyssalloy_239_screw')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:lubricant')
        .inputFluids('astrogreg:polyamide_imide 4608')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_conveyor_module`))
                .dataStack('gtceu:data_module')
                .CWUt(112, 200000)
                .EUt(488000)
        )  
           
    gt.assembly_line('uhv_electric_pump')
        .itemInputs('gtceu:uhv_electric_motor')
        .itemInputs('astrogreg:polyamide_imide_large_fluid_pipe')
        .itemInputs('2x gtceu:neutronium_plate')
        .itemInputs('8x astrogreg:abyssalloy_239_screw')
        .itemInputs('16x astrogreg:polyamide_imide_ring')
        .itemInputs('astrogreg:abyssalloy_239_rotor')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:lubricant')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_electric_pump`))
                .dataStack('gtceu:data_module')
                .CWUt(112, 200000)
                .EUt(488000)
        ) 

    gt.assembly_line('uhv_robot_arm')
        .itemInputs('4x astrogreg:long_electrolyte_rod')
        .itemInputs('astrogreg:abyssalloy_239_gear')
        .itemInputs('3x astrogreg:small_abyssalloy_239_gear')
        .itemInputs('2x gtceu:uhv_electric_motor')
        .itemInputs('gtceu:uhv_electric_piston')
        .itemInputs('#gtceu:circuits/uhv')        
        .itemInputs('2x #gtceu:circuits/uv')        
        .itemInputs('4x #gtceu:circuits/zpm')        
        .itemInputs('4x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 1728')
        .inputFluids('gtceu:lubricant')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_robot_arm`))
                .dataStack('gtceu:data_module')
                .CWUt(118, 224000)
                .EUt(488000)
        ) 

    gt.assembly_line('uhv_emitter')
        .itemInputs('gtceu:neutronium_frame')
        .itemInputs('gtceu:uhv_electric_motor')
        .itemInputs('4x astrogreg:long_electrolyte_rod')
        .itemInputs('gtceu:gravi_star')
        .itemInputs('2x #gtceu:circuits/uhv') 
        .itemInputs('64x astrogreg:abyssalloy_239_foil')
        .itemInputs('32x astrogreg:abyssalloy_239_foil')
        .itemInputs('4x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 1152')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_emitter`))
                .dataStack('gtceu:data_module')
                .CWUt(144, 256000)
                .EUt(488000)
        ) 

    gt.assembly_line('uhv_sensor')
        .itemInputs('gtceu:neutronium_frame')
        .itemInputs('gtceu:uhv_electric_motor')
        .itemInputs('4x gtceu:neutronium_plate')
        .itemInputs('gtceu:gravi_star')
        .itemInputs('2x #gtceu:circuits/uhv')
        .itemInputs('64x astrogreg:abyssalloy_239_foil')
        .itemInputs('32x astrogreg:abyssalloy_239_foil')
        .itemInputs('4x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 1152')
        .inputFluids('gtceu:neutronium 144')
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:uv_sensor`))
                .dataStack('gtceu:data_module')
                .CWUt(144, 256000)
                .EUt(488000)
        ) 
        
    event.remove({ id: 'gtceu:assembly_line/ultimate_battery' })
    event.remove({ id: 'gtceu:research_station/1x_gtceu_energy_cluster' })

    gt.assembly_line('gtceu:max_battery')
        .itemInputs('16x gtceu:double_darmstadtium_plate')
        .itemInputs('4x #gtceu:circuits/uhv')
        .itemInputs('64x gtceu:uhpic_wafer')
        .itemInputs('64x gtceu:uhpic_wafer')
        .itemInputs('2x gtceu:uhv_field_generator')
        .itemInputs('16x gtceu:energy_cluster')
        .itemInputs('64x gtceu:advanced_smd_diode')
        .itemInputs('64x gtceu:advanced_smd_capacitor')
        .itemInputs('64x gtceu:advanced_smd_resistor')
        .itemInputs('64x gtceu:advanced_smd_transistor')
        .itemInputs('64x gtceu:advanced_smd_inductor')
        .itemInputs('16x astrogreg:abyssalloy_239_bolt')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .itemInputs('64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .inputFluids('gtceu:soldering_alloy 5760')
        .inputFluids('astrogreg:polyamide_imide 1152')
        .inputFluids('gtceu:neutronium 648')
        .itemOutputs('gtceu:max_battery')
        .duration(600)
        .EUt(evenUV)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:energy_cluster`))
                .dataStack('gtceu:data_module')
                .CWUt(144, 256000)
                .EUt(488000)
        ) 
    //#endregion 



    //#region 
    gt.mixer('abyssalloy_239_dust')
        .itemInputs('6x gtceu:netherite_dust', '5x gtceu:plutonium_dust', '8x gtceu:naquadah_alloy_dust')
        .itemOutputs('19x astrogreg:abyssalloy_239_dust')
        .duration(3676)
        .circuit(1)
        .EUt(UV * 4)
    //#endregion
})