ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    gt.shaped('astrogreg:solar_boiler_array', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#gtceu:circuits/lv',
        B: 'gtceu:lv_electric_pump',
        C: 'gtceu:tin_single_cable',
        D: 'gtceu:solid_machine_casing'
    })
    .addMaterialInfo()


    gt.assembler('solar_cell_mk1_tin')
        .itemInputs('gtceu:solid_machine_casing', 'gtceu:tempered_glass', '16x gtceu:silver_foil', '2x gtceu:tin_single_cable')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('2x astrogreg:solar_cell_silver')
        .duration(200)
        .EUt(30)
        
    gt.assembler('solar_cell_mk1_soldering_alloy')
        .itemInputs('gtceu:solid_machine_casing', 'gtceu:tempered_glass', '16x gtceu:silver_foil', '2x gtceu:tin_single_cable')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x astrogreg:solar_cell_silver')
        .duration(200)
        .EUt(30)
        .addMaterialInfo(true) 
          
    gt.assembler('solar_cell_mk2_tin')
        .itemInputs('astrogreg:solar_cell_silver', 'gtceu:tempered_glass', '16x astrogreg:etrium_foil', '2x gtceu:copper_single_cable')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('astrogreg:solar_cell_etrium')
        .duration(100)
        .EUt(120)
        
    gt.assembler('solar_cell_mk2_soldering_alloy')
        .itemInputs('astrogreg:solar_cell_silver', 'gtceu:tempered_glass', '16x astrogreg:etrium_foil', '2x gtceu:copper_single_cable')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('astrogreg:solar_cell_etrium')
        .duration(100)
        .EUt(120)
        .addMaterialInfo(true) 
        
    gt.assembler('solar_cell_mk3')
        .itemInputs('astrogreg:solar_cell_etrium', 'gtceu:laminated_glass', '16x astrogreg:vesnium_foil', '2x gtceu:platinum_single_cable', '#gtceu:circuits/ev')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('astrogreg:solar_cell_vesnium')
        .duration(100)
        .EUt(7860)
        .addMaterialInfo(true) 

    gt.assembly_line('solar_cell_mk4')
        .itemInputs('astrogreg:solar_cell_vesnium')
        .itemInputs('2x gtceu:laminated_glass')
        .itemInputs('gtceu:zpm_electric_pump')
        .itemInputs('64x gtceu:enriched_naquadah_foil')
        .itemInputs('#gtceu:circuits/luv')
        .itemInputs('4x gtceu:vanadium_gallium_single_cable')
        .inputFluids('gtceu:soldering_alloy')
        .itemOutputs('astrogreg:solar_cell_enriched_naquadah')
        .duration(100)
        .EUt(30720)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`astrogreg:solar_cell_vesnium`))
                .dataStack('gtceu:data_orb')
                .CWUt(36, 48000)
                .EUt(122880)
        )
        .addMaterialInfo(true) 
})