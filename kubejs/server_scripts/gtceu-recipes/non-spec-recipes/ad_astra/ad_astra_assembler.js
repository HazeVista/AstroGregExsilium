ServerEvents.recipes(event => {

const parts = event.recipes.gtceu.assembler

//#region oxygen
parts('assemble_oxy_gear')
    .itemInputs('2x ad_astra:gas_tank', '2x gtceu:iron_plate', 'gtceu:iron_rod')
    .itemOutputs('ad_astra:oxygen_gear')
    .duration(80)
    .circuit(30)
    .EUt(30)

parts('assemble_small_tank')
    .itemInputs('7x gtceu:iron_plate', 'gtceu:iron_ring')
    .itemOutputs('ad_astra:gas_tank')
    .duration(80)
    .circuit(30)
    .EUt(30)
    
parts('assemble_large_tank')
    .itemInputs('7x gtceu:steel_plate', 'gtceu:steel_ring')
    .itemOutputs('ad_astra:large_gas_tank')
    .duration(80)
    .circuit(30)
    .EUt(30)
//#endregion

//#region rover
parts('assemble_wheel')
    .itemInputs('gtceu:long_steel_rod', '4x gtceu:steel_rod', 'gtceu:steel_ring')
    .inputFluids('gtceu:styrene_butadiene_rubber 1152')
    .itemOutputs('ad_astra:wheel')
    .duration(400)
    .circuit(30)
    .EUt(30)

parts('assemble_wheel_alt')
    .itemInputs('gtceu:long_steel_rod', '4x gtceu:steel_rod', 'gtceu:steel_ring', '8x gtceu:styrene_butadiene_rubber_plate')
    .itemOutputs('ad_astra:wheel')
    .duration(400)
    .circuit(30)
    .EUt(30)
//#endregion

//#region fins
parts('assemble_basic_fin')
    .itemInputs('2x gtceu:dense_steel_plate', 'gtceu:double_damascus_steel_plate')
    .itemOutputs('ad_astra:basic_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(30)

// parts('assemble_advanced_fin')
//     .itemInputs('2x gtceu:dense_titanium_plate', 'gtceu:double_stainless_steel_plate')
//     .itemOutputs('ad_astra:advanced_rocket_fin')
//     .duration(200)
//     .circuit(30)
//     .EUt(1920)

parts('assemble_elite_fin')
    .itemInputs('2x gtceu:dense_naquadah_alloy_plate', 'gtceu:double_naquadah_plate')
    .itemOutputs('ad_astra:elite_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(30720)

// parts('assemble_ultimate_fin')
//     .itemInputs('2x gtceu:dense_neutronium_plate', 'gtceu:double_duranium_plate')
//     .itemOutputs('ad_astra:ultimate_rocket_fin')
//     .duration(200)
//     .circuit(30)
//     .EUt(491520)

//#endregion

//#region nose cones
parts('assemble_basic_nose')
    .itemInputs('4x gtceu:double_steel_plate', 'gtceu:aluminium_frame', 'gtceu:mv_emitter')
    .itemOutputs('ad_astra:basic_rocket_nose_cone')
    .duration(300)
    .circuit(30)
    .EUt(120)
//#endregion

//#region engines
// parts('assemble_lv_engine')
//     .itemInputs('', '', '', '', '')
//     .itemOutputs('')
//     .duration()
//#endregion

//#region misc
parts('assemble_launch_pad')
    .itemInputs('8x gtceu:dense_steel_plate')
    .itemOutputs('ad_astra:launch_pad')
    .duration(100)
    .circuit(30)
    .EUt(30)

parts('assemble_vent')
    .itemInputs('2x gtceu:steel_plate', '6x gtceu:iron_rod')
    .itemOutputs('4x ad_astra:vent')
    .duration(160)
    .circuit(30)
    .EUt(30)
//#endregion
})