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
    .itemInputs('gtceu:long_steel_rod', '4x gtceu:steel_rod', 'gtceu:steel_sleeve')
    .inputFluids('gtceu:rubber 1152')
    .itemOutputs('ad_astra:wheel')
    .duration(200)
    .circuit(30)
    .EUt(30)

parts('assemble_wheel_alt')
    .itemInputs('gtceu:long_steel_rod', '4x gtceu:steel_rod', 'gtceu:steel_sleeve', '8x gtceu:rubber_plate')
    .itemOutputs('ad_astra:wheel')
    .duration(200)
    .circuit(30)
    .EUt(30)

parts('assemble_buggy')
    .itemInputs('16x gtceu:steel_plate', '4x gtceu:long_steel_rod', '4x ad_astra:wheel', '#gtceu:batteries/lv', 'gtceu:lv_hermetic_casing', 'ad_astra:radio')
    .itemOutputs('ad_astra:tier_1_rover')
    .duration(600)
    .circuit(30)
    .EUt(30)
    .addMaterialInfo(true)
//#endregion



//#region fins
parts('assemble_basic_fin')
    .itemInputs('2x gtceu:dense_steel_plate', 'gtceu:double_damascus_steel_plate')
    .itemOutputs('gtceu:basic_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(30)
    .addMaterialInfo(true)

parts('assemble_advanced_fin')
    .itemInputs('2x gtceu:dense_titanium_plate', 'gtceu:double_stainless_steel_plate')
    .itemOutputs('gtceu:advanced_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(1920)
    .addMaterialInfo(true)

parts('assemble_elite_fin')
    .itemInputs('2x gtceu:dense_naquadah_alloy_plate', 'gtceu:double_netherite_plate')
    .itemOutputs('gtceu:elite_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(30720)
    .addMaterialInfo(true)

parts('assemble_ultimate_fin')
    .itemInputs('2x gtceu:dense_neutronium_plate', 'gtceu:double_duranium_plate')
    .itemOutputs('gtceu:ultimate_rocket_fin')
    .duration(200)
    .circuit(30)
    .EUt(491520)
    .addMaterialInfo(true)

//#endregion



//#region nose cones
parts('assemble_basic_nose')
    .itemInputs('4x gtceu:double_steel_plate', 'gtceu:aluminium_frame', 'gtceu:mv_emitter')
    .itemOutputs('gtceu:basic_rocket_nose_cone')
    .duration(300)
    .circuit(30)
    .EUt(120)
    .addMaterialInfo(true)

parts('assemble_advanced_nose')
    .itemInputs('6x gtceu:double_titanium_plate', 'gtceu:stainless_steel_frame', 'gtceu:ev_emitter')
    .itemOutputs('gtceu:advanced_rocket_nose_cone')
    .duration(300)
    .circuit(30)
    .EUt(1920)
    .addMaterialInfo(true)

parts('assemble_elite_cone')
    .itemInputs('8x gtceu:double_naquadah_alloy_plate', 'gtceu:europium_frame', 'gtceu:luv_emitter')
    .itemOutputs('gtceu:elite_rocket_nose_cone')
    .duration(300)
    .circuit(30)
    .EUt(30720)
    .addMaterialInfo(true)
    
parts('assemble_ultimate_cone')
    .itemInputs('12x gtceu:double_neutronium_plate', 'gtceu:neutronium_frame', 'gtceu:uv_emitter')
    .itemOutputs('gtceu:ultimate_rocket_nose_cone')
    .duration(300)
    .circuit(30)
    .EUt(491520)
    .addMaterialInfo(true)
//#endregion



//#region engines
parts('assemble_lv_engine')
    .itemInputs('16x gtceu:steel_plate', '4x gtceu:lv_electric_motor', '4x gtceu:tin_sleeve', '2x gtceu:long_steel_rod', 'gtceu:steel_frame', 'gtceu:tin_rotor', '16x gtceu:fine_copper_wire')
    .itemOutputs('gtceu:lv_rocket_engine')
    .duration(600)
    .circuit(30)
    .EUt(16)
    .addMaterialInfo(true)
    
parts('assemble_mv_engine')
    .itemInputs('16x gtceu:aluminium_plate', '4x gtceu:mv_electric_motor', '4x gtceu:steel_sleeve', '4x gtceu:long_aluminium_rod', 'gtceu:aluminium_frame', 'gtceu:steel_rotor', '16x gtceu:fine_cupronickel_wire')
    .itemOutputs('gtceu:mv_rocket_engine')
    .duration(600)
    .circuit(30)
    .EUt(64)
    .addMaterialInfo(true)

parts('assemble_hv_engine')
    .itemInputs('16x gtceu:stainless_steel_plate', '4x gtceu:hv_electric_motor', '4x gtceu:stainless_steel_sleeve', '2x gtceu:long_stainless_steel_rod', 'gtceu:stainless_steel_frame', 'gtceu:stainless_steel_rotor', '16x gtceu:fine_electrum_wire')
    .itemOutputs('gtceu:hv_rocket_engine')
    .duration(600)
    .circuit(30)
    .EUt(256)
    .addMaterialInfo(true)
    
parts('assemble_ev_engine')
    .itemInputs('16x gtceu:titanium_plate', '4x gtceu:ev_electric_motor', '4x gtceu:ultimet_sleeve', '2x gtceu:long_titanium_rod', 'gtceu:titanium_frame', 'gtceu:titanium_rotor', '16x gtceu:fine_aluminium_wire')
    .itemOutputs('gtceu:ev_rocket_engine')
    .duration(600)
    .circuit(30)
    .EUt(1024)
    .addMaterialInfo(true)
      
parts('assemble_iv_engine')
    .itemInputs('16x gtceu:tungsten_steel_plate', '4x gtceu:iv_electric_motor', '4x gtceu:tungsten_carbide_sleeve', '2x gtceu:long_tungsten_steel_rod', 'gtceu:tungsten_steel_frame', 'gtceu:tungsten_steel_rotor', '16x gtceu:fine_platinum_wire')
    .itemOutputs('gtceu:iv_rocket_engine')
    .duration(600)
    .circuit(30)
    .EUt(4096)
    .addMaterialInfo(true)
//#endregion



//#region misc
parts('assemble_launch_pad')
    .itemInputs('8x gtceu:dense_steel_plate')
    .itemOutputs('ad_astra:launch_pad')
    .duration(100)
    .circuit(30)
    .EUt(30)
    .addMaterialInfo(true)

parts('assemble_vent')
    .itemInputs('2x gtceu:steel_plate', '6x gtceu:iron_rod')
    .itemOutputs('4x ad_astra:vent')
    .duration(160)
    .circuit(30)
    .EUt(30)
    .addMaterialInfo(true)

parts('assemble_radio')
    .itemInputs('4x gtceu:tin_plate', '8x gtceu:fine_red_alloy_wire', 'gtceu:iron_rod', '#gtceu:circuits/ulv')
    .itemOutputs('ad_astra:radio')
    .duration(100)
    .circuit(30)
    .EUt(30)
    .addMaterialInfo(true)
//#endregion
})