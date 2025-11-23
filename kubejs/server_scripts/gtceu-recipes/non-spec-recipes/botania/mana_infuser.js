ServerEvents.recipes(event => {
const infuser = event.recipes.gtceu.mana_infusion
const purify = event.recipes.gtceu.botanic_purification

//#region no catalyst
    infuser('infuse_mana_powder')
        .itemInputs('gtceu:asteroid_stone_dust')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_powder')
        .duration(100)
        .EUt(7)
  
    infuser('infuse_mana_powder_alt')
        .itemInputs('gtceu:stone_dust')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_powder')
        .duration(100)
        .EUt(7)

    infuser('infuse_mana_diamond')
        .itemInputs('minecraft:diamond')
        .inputFluids('manafluid:mana 100')
        .itemOutputs('botania:mana_diamond')
        .duration(160)
        .EUt(28)

    infuser('infuse_mana_diamond_block')
        .itemInputs('#forge:storage_blocks/diamond')
        .inputFluids('manafluid:mana 900')
        .itemOutputs('botania:mana_diamond_block')
        .duration(1440)
        .EUt(28)    

    infuser('infuse_mana_diamond_exquisite')
        .itemInputs('gtceu:exquisite_diamond_gem')
        .inputFluids('manafluid:mana 400')
        .itemOutputs('gtceu:exquisite_mana_diamond_gem')
        .duration(640)
        .EUt(28)    

    infuser('infuse_mana_diamond_flawless')
        .itemInputs('gtceu:flawless_diamond_gem')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('gtceu:flawless_mana_diamond_gem')
        .duration(320)
        .EUt(28) 
    
    infuser('infuse_mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('botania:mana_pearl')
        .duration(100)
        .EUt(14)

    infuser('infuse_mana_cloth')
        .itemInputs('farmersdelight:canvas')
        .inputFluids('manafluid:mana 40')
        .itemOutputs('botania:manaweave_cloth')
        .duration(160)
        .EUt(7)

    infuser('infuse_string')
        .itemInputs('minecraft:string')
        .inputFluids('manafluid:mana 10')
        .itemOutputs('botania:mana_string')
        .duration(40)
        .EUt(7)

    infuser('infuse_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('botania:mana_glass')
        .duration(200)
        .EUt(7)

    infuser('infuse_cookie')
        .itemInputs('minecraft:cookie')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:mana_cookie')
        .duration(300)
        .EUt(28)

    infuser('infuse_relay')
        .itemInputs('minecraft:piston')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:piston_relay')
        .duration(300)
        .EUt(28)

    infuser('infused_grass')
        .itemInputs('#forge:grass')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:grass_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_mycelium')
        .itemInputs('#forge:mushrooms')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:mycelium_seeds')
        .duration(80)
        .EUt(7)

    infuser('infused_podzol')
        .itemInputs('minecraft:dead_bush')
        .inputFluids('manafluid:mana 25')
        .itemOutputs('botania:podzol_seeds')
        .duration(80)
        .EUt(7)

//#endregion



//#region alchemy
    infuser('infused_terrasteel')
        .itemInputs('gtceu:inactive_terrasteel_dust')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 100')
        .itemOutputs('gtceu:terrasteel_dust')
        .duration(150)
        .EUt(120)

    infuser('infused_nether_wart')
        .itemInputs('minecraft:blaze_rod')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 40')
        .itemOutputs('minecraft:nether_wart')
        .duration(300)
        .EUt(120)

    infuser('infused_ice')
        .itemInputs('minecraft:snow_block')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 10')
        .itemOutputs('minecraft:ice')
        .duration(300)
        .EUt(120)

    infuser('infused_red_sand')
        .itemInputs('minecraft:sand')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 10')
        .itemOutputs('minecraft:red_sand')
        .duration(300)
        .EUt(120)
        
    infuser('infused_sweet_berries')
        .itemInputs('minecraft:apple')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 2')
        .itemOutputs('minecraft:sweet_berries')
        .duration(300)
        .EUt(120)
        
    infuser('infused_glow_berries')
        .itemInputs('minecraft:sweet_berries')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 2')
        .itemOutputs('minecraft:glow_berries')
        .duration(300)
        .EUt(120)
        
    infuser('infused_apple')
        .itemInputs('minecraft:glow_berries')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 2')
        .itemOutputs('minecraft:apple')
        .duration(300)
        .EUt(120)
        
    infuser('infused_cactus')
        .itemInputs('minecraft:slime_ball')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 12')
        .itemOutputs('minecraft:cactus')
        .duration(300)
        .EUt(120)
        
    infuser('infused_slime_ball')
        .itemInputs('minecraft:cactus')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 12')
        .itemOutputs('minecraft:slime_ball')
        .duration(300)
        .EUt(120)
        
    infuser('infused_melon_seeds')
        .itemInputs('minecraft:beetroot_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:melon_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_pumpkin_seeds')
        .itemInputs('minecraft:melon_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:pumpkin_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_cocoa_beans')
        .itemInputs('minecraft:pumpkin_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:cocoa_beans')
        .duration(300)
        .EUt(120)
        
    infuser('infused_wheat_seeds')
        .itemInputs('minecraft:cocoa_beans')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:wheat_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_rice')
        .itemInputs('minecraft:wheat_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('farmersdelight:rice')
        .duration(300)
        .EUt(120)
        
    infuser('infused_cabbage_seeds')
        .itemInputs('farmersdelight:rice')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('farmersdelight:cabbage_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_tomato_seeds')
        .itemInputs('farmersdelight:cabbage_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('farmersdelight:tomato_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_onion')
        .itemInputs('farmersdelight:tomato_seeds')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('farmersdelight:onion')
        .duration(300)
        .EUt(120)
        
    infuser('infused_carrot')
        .itemInputs('farmersdelight:onion')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:carrot')
        .duration(300)
        .EUt(120)
        
    infuser('infused_potato')
        .itemInputs('minecraft:carrot')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:potato')
        .duration(300)
        .EUt(120)
        
    infuser('infused_beetroot_seeds')
        .itemInputs('minecraft:potato')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 60')
        .itemOutputs('minecraft:beetroot_seeds')
        .duration(300)
        .EUt(120)
        
    infuser('infused_redstone')
        .itemInputs('minecraft:glowstone_dust')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 2')
        .itemOutputs('minecraft:redstone')
        .duration(300)
        .EUt(120)
        
    infuser('infused_glowstone')
        .itemInputs('minecraft:redstone')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 2')
        .itemOutputs('minecraft:glowstone_dust')
        .duration(300)
        .EUt(120)
        
    infuser('infused_dark_oak')
        .itemInputs('gtceu:rubber_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:dark_oak_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_mangrove_propagule')
        .itemInputs('minecraft:dark_oak_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:mangrove_propagule')
        .duration(300)
        .EUt(120)
        
    infuser('infused_cherry_sapling')
        .itemInputs('minecraft:mangrove_propagule')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:cherry_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_oak_sapling')
        .itemInputs('minecraft:cherry_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:oak_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_spruce_sapling')
        .itemInputs('minecraft:oak_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:spruce_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_birch_sapling')
        .itemInputs('minecraft:spruce_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:birch_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_jungle_sapling')
        .itemInputs('minecraft:birch_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:jungle_sapling')
        .duration(300)
        .EUt(120)
        
    infuser('infused_acacia_sapling')
        .itemInputs('minecraft:jungle_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('minecraft:acacia_sapling')
        .duration(300)
        .EUt(120)
          
    infuser('infused_rubber_sapling')
        .itemInputs('minecraft:acacia_sapling')
        .notConsumable('botania:alchemy_catalyst')
        .inputFluids('manafluid:mana 1')
        .itemOutputs('gtceu:rubber_sapling')
        .duration(300)
        .EUt(120)        

//#endregion



//#region gaia catalyst



//#endregion



//#region purification



//#endregion



//#region machine recipes

    event.shaped('gtceu:lv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'gtceu:tempered_glass',
        B: 'gtceu:tin_single_cable',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:lv_machine_hull',
        E: 'gtceu:lv_electric_pump',
        F: 'gtceu:lv_conveyor_module'
    })

    event.shaped('gtceu:mv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:mana_glass',
        B: 'gtceu:copper_single_cable',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'gtceu:mv_electric_pump',
        F: 'gtceu:mv_conveyor_module'
    })
    
    event.shaped('gtceu:hv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:mana_glass',
        B: 'gtceu:gold_single_cable',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'gtceu:hv_electric_pump',
        F: 'gtceu:hv_conveyor_module'
    })
      
    event.shaped('gtceu:ev_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:mana_glass',
        B: 'gtceu:aluminium_single_cable',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        E: 'gtceu:ev_electric_pump',
        F: 'gtceu:ev_conveyor_module'
    })  
      
    event.shaped('gtceu:iv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:alf_glass',
        B: 'gtceu:platinum_single_cable',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_machine_hull',
        E: 'gtceu:iv_electric_pump',
        F: 'gtceu:iv_conveyor_module'
    })  
      
    event.shaped('gtceu:luv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:alf_glass',
        B: 'gtceu:niobium_titanium_single_cable',
        C: '#gtceu:circuits/luv',
        D: 'gtceu:luv_machine_hull',
        E: 'gtceu:luv_electric_pump',
        F: 'gtceu:luv_conveyor_module'
    }) 
      
    event.shaped('gtceu:zpm_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:bifrost_perm',
        B: 'gtceu:vanadium_gallium_single_cable',
        C: '#gtceu:circuits/zpm',
        D: 'gtceu:zpm_machine_hull',
        E: 'gtceu:zpm_electric_pump',
        F: 'gtceu:zpm_conveyor_module'
    }) 
      
    event.shaped('gtceu:uv_mana_infuser', [
        'CAC',
        'BDB',
        'EBF'
    ], {
        A: 'botania:bifrost_perm',
        B: 'gtceu:yttrium_barium_cuprate_single_cable',
        C: '#gtceu:circuits/uv',
        D: 'gtceu:uv_machine_hull',
        E: 'gtceu:uv_electric_pump',
        F: 'gtceu:uv_conveyor_module'
    }) 
//#endregion

    // infuser('infuse_')
    //     .itemInputs()
    //     .inputFluids('manafluid:mana ')
    //     .itemOutputs()
    //     .duration()
    //     .EUt()
})