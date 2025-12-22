ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region Botania KubeJS guide
    /* Helper for botania recipes:
    # The documentation is pretty poor and the format is extremely inconsistent, 
    # so I had to add my own documentation here.
    #
    # IMPORTANT: 1 bucket/1,000mb of mana is equal to 100,000 native units of mana. 100 units = 1mb.
    #
    # mana imbument:
    # event.recipes.botania.mana_infusion('output', 'input', mana_amount, 'optional_catalyst')
    #
    # elf trades: (probably won't use these)
    # event.recipes.botania.elven_trade(['output'], 'input')
    # event.recipes.botania.elven_trade(['output1', 'output2'], ['input1', 'input2'])
    #
    # pure daisy: (time amounts make no fucking sense, 600=4 mins somehow. 1t = 0.125)
    # event.recipes.botania.pure_daisy('output', 'input', time)
    #
    # apothecary: (automatically adds seeds and water)
    # event.recipes.botania.petal_apothecary('output', ['input'])
    #
    # altar: (automatically adds livingrock)
    # event.recipes.botania.runic_altar('output', ['input1', 'input2'], mana_amount)
    #
    # terra plate: (probably won't be used)
    # event.recipes.botania.terra_plate('output', ['input1', 'input2'], mana_amount)
    #
    # orechids: (time is also in shit units here)
    # event.recipes.botania.orechid('output_block', 'input_block', time)
    # event.recipes.botania.orechid_ignem('output_block', 'input_block', 1)
    #
    # I couldnt figure out the marimorphiposa or brewing but we probably won't have to worry abt them 
    */
    //#endregion

    

    //#region 'machine' recipes
    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ], {
        A: 'gtceu:cobbled_asteroid_stone',
        B: '#botania:petals'
    })
    
    event.shaped('botanicadds:dreaming_pool', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'botanicadds:dreamrock'
    })

    gt.assembler('assembler_mana_pylon')
        .itemInputs('4x botania:manasteel_nugget', '4x gtceu:double_gold_plate', 'astrogreg:exquisite_mana_diamond_gem')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('botania:mana_pylon')
        .duration(400)
        .EUt(120)
    
    //#endregion


    
    //#region mana infusion
    event.recipes.botania.mana_infusion('botania:manaweave_cloth', 'farmersdelight:canvas', 4000)
    event.recipes.botania.mana_infusion('botania:mana_powder', '#forge:stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:managlass', 'gtceu:tempered_glass', 100)
    event.recipes.botania.mana_infusion('astrogreg:exquisite_mana_diamond_gem', 'gtceu:exquisite_diamond_gem', 40000)
    event.recipes.botania.mana_infusion('astrogreg:flawless_mana_diamond_gem', 'gtceu:flawless_diamond_gem', 20000)
    event.recipes.botania.mana_infusion('botania:mana_diamond', 'minecraft:diamond', 10000)
    event.recipes.botania.mana_infusion('botania:mana_diamond_block', '#forge:storage_blocks/diamond', 10000)
    event.recipes.botania.mana_infusion('botania:mana_cookie', '#forge:cookies', 20000)   
    event.recipes.botania.mana_infusion('botania:grass_seeds', '#forge:grass', 2500)   
    event.recipes.botania.mana_infusion('botania:mycelium_seeds', '#forge:mushrooms', 2500)   
    event.recipes.botania.mana_infusion('botania:podzol_seeds', 'minecraft:dead_bush', 2500)   
    event.recipes.botania.mana_infusion('botania:piston_relay', 'minecraft:piston', 15000)   
    event.recipes.botania.mana_infusion('botania:mana_string', 'minecraft:string', 1000)   
    event.recipes.botania.mana_infusion('botania:mana_pearl', 'minecraft:ender_pearl', 6000)

    event.recipes.botania.pure_daisy('minecraft:end_stone', 'minecraft:blackstone', 150)
    event.recipes.botania.pure_daisy('botania:livingrock', '#forge:stone', 150)
    //#endregion
    


    //#region low level materials
    event.shaped('4x astrogreg:manasteel_dust', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'botania:mana_powder',
        B: 'gtceu:wrought_iron_dust'
    })

    gt.mixer('mix_manasteel_dust')
        .itemInputs('botania:mana_powder', 'gtceu:wrought_iron_dust')
        .itemOutputs('astrogreg:manasteel_dust')
        .duration(80)
        .EUt(7)

    event.shaped('2x botania:managlass_pane', [
        'AB'
    ], {
       A: 'botania:managlass',
       B: '#forge:tools/saws'
    })    

    gt.cutter('cutting_managlass')
        .itemInputs('3x botania:managlass')
        .itemOutputs('8x botania:managlass_pane')
        .duration(50)
        .EUt(7)

    event.shaped('2x botania:bifrost_pane', [
        'AB'
    ], {
       A: 'botania:bifrost_perm',
       B: '#forge:tools/saws'
    })    

    gt.cutter('cutting_bifrost_glass')
        .itemInputs('3x botania:bifrost_perm')
        .itemOutputs('8x botania:bifrost_pane')
        .duration(50)
        .EUt(7)

    event.shaped('2x botania:alfglass_pane', [
        'AB'
    ], {
       A: 'botania:alfglass',
       B: '#forge:tools/saws'
    })    

    gt.cutter('cutting_alfglass')
        .itemInputs('3x botania:alfglass')
        .itemOutputs('8x botania:alfglass_pane')
        .duration(50)
        .EUt(7)

    gt.forge_hammer('forge_hammer_gaia_shard')
        .itemInputs('botania:life_essence')
        .itemOutputs('5x botanicadds:gaia_shard')
        .duration(100)
        .EUt(2000)

    gt.mixer('mix_inactive_terrasteel')
        .itemInputs('astrogreg:manasteel_dust', 'gtceu:beryllium_dust', 'gtceu:aluminium_dust')
        .itemOutputs('3x astrogreg:dormant_terrasteel_dust')
        .duration(300)
        .EUt(120)
    //#endregion

        

    //#region mana manipulation
    event.shaped('botania:hourglass', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'gtceu:gold_plate',
        B: 'botania:managlass_pane',
        C: 'astrogreg:manasteel_plate'
    })

    event.shaped('botania:forest_eye', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'botania:livingrock',
        C: 'minecraft:ender_eye'
    })

    event.shaped('botania:bellows', [
        'AAA',
        'BC ',
        'AAA'
    ], {
       A: 'botania:livingwood_slab',
       B: 'botania:air_rune',
       C: 'farmersdelight:canvas'
    })

    event.shaped('botania:turntable', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'botania:livingwood_slab',
        B: 'gtceu:iron_plate',
        C: 'gtceu:lv_electric_motor'
    })

    event.shaped('botania:redstone_spreader', [
        'AB'
    ], {
        A: 'botania:mana_spreader',
        B: 'minecraft:clock'
    })

    event.shaped('botania:elven_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: 'botanicadds:elvenwood_log',
        B: 'botania:mana_spreader',
        C: 'astrogreg:double_elementium_plate',
        D: 'botania:pixie_lens'
    })

    event.shaped('botania:gaia_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: '#botania:dreamwood_logs',
        B: 'botania:elven_spreader',
        C: 'astrogreg:double_gaiasteel_plate',
        D: 'botania:gaia_lens'
    })

    event.shaped('botania:mana_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: '#botania:livingwood_logs',
        B: '#botania:petals',
        C: 'gtceu:double_copper_plate',
        D: '#c:glass_panes'
    })

    event.shaped('botania:mana_distributor', [
        'BBB',
        'CAC',
        'BBB'
    ], {
       A: 'astrogreg:manasteel_frame',
       B: 'botania:livingrock',
       C: 'astrogreg:manasteel_ring'
    })

    event.shaped('2x botania:pump', [
        'ADA',
        'C B',
        'ADA'
    ], {
       A: 'astrogreg:manasteel_plate',
       B: '#forge:tools/hammers',
       C: '#forge:tools/wrenches',
       D: 'botania:livingrock'
    })

    event.shaped('botania:alchemy_catalyst', [
        'BBB',
        'CAC',
        'BBB'
    ], {
        A: 'astrogreg:flawless_mana_diamond_gem',
        B: 'botania:livingrock',
        C: 'gtceu:gold_double_plate'
    })
    //#endregion



    //#region manasteel cooking
        gt.primitive_blast_furnace('manasteel_charcoal')
        .itemInputs('astrogreg:manasteel_dust', 'minecraft:charcoal')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    gt.primitive_blast_furnace('manasteel_coal')
        .itemInputs('astrogreg:manasteel_dust', 'minecraft:coal')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    gt.primitive_blast_furnace('manasteel_coke')
        .itemInputs('astrogreg:manasteel_dust', 'gtceu:coke_gem')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(750)

    gt.primitive_blast_furnace('manasteel_charcoal_dust')
        .itemInputs('astrogreg:manasteel_dust', 'gtceu:charcoal_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    gt.primitive_blast_furnace('manasteel_coal_dust')
        .itemInputs('astrogreg:manasteel_dust', 'gtceu:coal_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    gt.primitive_blast_furnace('manasteel_coke_dust')
        .itemInputs('astrogreg:manasteel_dust', 'gtceu:coke_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(750)
    //#endregion



    //#region trinkets
    event.shaped('botania:crafting_halo', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'minecraft:crafting_table',
        C: 'botania:mana_pearl'
    })

    event.shaped('botania:monocle', [
        'AB',
        ' B',
        ' B'
    ], {
       A: 'botania:lens_normal',
       B: 'dustrial_decor:gold_chain'
    })

    event.shaped('botania:prism', [
        'ABA',
        'ACA',
        'ABA'
    ], {
       A: 'botania:managlass_pane',
       B: 'botania:lens_normal',
       C: 'botania:spectral_platform'
    })

    event.shaped('botania:thorn_chakram', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:vine',
        B: 'astrogreg:terrasteel_ring'
    })

    event.shaped('botania:bauble_box', [
        'BCB',
        'BAB',
        'BBB'
    ], {
        A: '#forge:chests',
        B: 'astrogreg:manasteel_plate',
        C: 'gtceu:gold_ring'
    })

    event.shaped('botania:sextant', [
        ' AC',
        ' AA',
        'BBB'
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:manasteel_plate',
        C: 'astrogreg:manasteel_rod'
    })

    event.shaped('botania:super_lava_pendant', [
        ' A ',
        'A A',
        'BA '
    ], {
        A: 'botania:red_string',
        B: 'botania:lava_pendant'
    })
    
    event.shaped('botania:super_cloud_pendant', [
        ' A ',
        'A A',
        'BA '
    ], {
        A: 'botania:red_string',
        B: 'botania:cloud_pendant'
    })

    event.shaped('botania:mana_mirror', [
        ' BC',
        ' AB',
        'A  '
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:mana_tablet'
    })
    //#endregion


    
    //#region tools
    event.shaped('botania:manasteel_shears', [
        'AB',
        'BC'
    ], {
       A: '#forge:tools/hammers',
       B: 'astrogreg:manasteel_plate',
       C: '#forge:tools/files'
    })

    event.shaped('botania:elementium_shears', [
        'AB',
        'BC'
    ], {
       A: '#forge:tools/hammers',
       B: 'astrogreg:elementium_plate',
       C: '#forge:tools/files'
    })

    event.shaped('botania:open_bucket', [
        'BAB',
        ' B '
    ], {
        A: '#forge:tools/hammers',
        B: 'astrogreg:elementium_plate'
    })

    event.shaped('botania:terrasteel_boots', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:winter_rune',
        D: 'botania:manasteel_boots'
    })

    event.shaped('botania:terrasteel_leggings', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:autumn_rune',
        D: 'botania:manasteel_leggings'
    })

    event.shaped('botania:terrasteel_helmet', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:spring_rune',
        D: 'botania:manasteel_helmet'
    })
    
    event.shaped('botania:terrasteel_chestplate', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:summer_rune',
        D: 'botania:manasteel_chestplate'
    })
    //#endregion



    //#region lenses
    event.shaped('botania:lens_normal', [
        'B',
        'A'
    ], {
       A: 'astrogreg:manasteel_ring',
       B: 'botania:managlass_pane'
    })

    event.shaped('botania:terra_lens', [
        'B',
        'A'
    ], {
       A: 'astrogreg:terrasteel_ring',
       B: 'astrogreg:mana_diamond_lens'
    })

    event.shaped('botania:gaia_lens', [
        'B',
        'A'
    ], {
       A: 'gtceu:gaiasteel_ring',
       B: 'astrogreg:dragonstone_lens'
    })

    event.shaped('botania:pixie_lens', [
        'B',
        'A'
    ], {
       A: 'astrogreg:elementium_ring',
       B: 'astrogreg:dragonstone_lens'
    })

    event.shaped('botania:lens_magnet', [
        'ABC',
        '   ',
        '   '
    ], {
        A: 'gtceu:magnetic_iron_rod',
        B: 'botania:lens_normal',
        C: 'gtceu:gold_rod'
    })
    //#endregion



    //#region rings
    event.shaped('botania:mana_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:mana_tablet'
    })

    event.shaped('botania:magnet_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:lens_magnet'
    })
    
    event.shaped('botania:aura_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:mana_rune'
    })
    
    event.shaped('botania:water_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:water_rune',
        D: '#minecraft:fishes'
    })
    
    event.shaped('botania:swap_ring', [
        'CBD',
        'BAB',
        'EBF'
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'minecraft:clay',
        D: '#forge:stone',
        E: '#minecraft:logs',
        F: '#minecraft:leaves'
    })
    
    event.shaped('botania:dodge_ring', [
        'CB ',
        'BAB',
        ' BD'
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:air_rune',
        D: 'botania:fire_rune'
    })
    
    event.shaped('botania:mining_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'astrogreg:manasteel_ring',
        B: 'astrogreg:manasteel_plate',
        C: 'botania:earth_rune',
        D: 'minecraft:diamond_pickaxe'
    })
    
    event.shaped('botania:magnet_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:magnet_ring',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:lens_magnet'
    })
     
    event.shaped('botania:aura_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:aura_ring',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:mana_rune'
    })
        
    event.shaped('botania:mana_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:mana_ring',
        B: 'astrogreg:terrasteel_plate',
        C: 'botania:mana_tablet'
    })

    event.shaped('botania:pixie_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'astrogreg:elementium_ring',
        B: 'astrogreg:elementium_plate',
        C: 'botania:pixie_dust'
    })

    event.shaped('botania:reach_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'astrogreg:elementium_ring',
        B: 'astrogreg:elementium_plate',
        C: 'botania:pride_rune'
    })

    event.shaped('botanicadds:mana_ring_gaia', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:mana_ring_greater',
        B: 'gtceu:gaiasteel_plate',
        C: 'botania:mana_rune'
    })

    event.shaped('botanicadds:aura_ring_gaia', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:aura_ring_greater',
        B: 'gtceu:gaiasteel_plate',
        C: 'botania:aura_rune'
    })
    //#endregion



    //#region spark augments
    event.shaped('botania:spark_upgrade_dispersive', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'botania:water_rune',
        C: 'botania:pixie_dust'
    })

    event.shaped('botania:spark_upgrade_dominant', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'botania:fire_rune',
        C: 'botania:pixie_dust'
    })
   
    event.shaped('botania:spark_upgrade_recessive', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'botania:earth_rune',
        C: 'botania:pixie_dust'
    })
    
    event.shaped('botania:spark_upgrade_isolated', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'botania:air_rune',
        C: 'botania:pixie_dust'
    }) 

    event.shaped('botania:spark_changer', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:elementium_plate',
        B: 'botania:livingrock',
        C: 'astrogreg:manasteel_plate'
    })
    //#endregion

    

    //#region quartz
    const quartzTypes = ['dark', 'red', 'mana', 'blaze', 'lavender', 'sunny']

    quartzTypes.forEach(quartzBlocking);

    function quartzBlocking(quartz) {
    
        event.shaped(`4x botania:quartz_${quartz}`, [
            'A'
        ], {
            A: `botania:${quartz}_quartz`
        })
    }

    event.shaped(`4x botania:quartz_elven`, [
        'A'
    ], {
        A: `botania:elf_quartz`
    })

    event.shaped('botania:quartz_blaze', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:orange_dye'
    })
    
    event.shaped('botania:quartz_dark', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:black_dye'
    })
    
    event.shaped('botania:quartz_red', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:red_dye'
    })
    
    event.shaped('botania:quartz_mana', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:light_blue_dye'
    })
    
    event.shaped('botania:quartz_lavender', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:purple_dye'
    })
    
    event.shaped('botania:quartz_elven', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:lime_dye'
    })
    
    event.shaped('botania:quartz_sunny', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:quartz',
        B: 'minecraft:yellow_dye'
    })
    //#endregion



    //#region logs
    const logTypes = ['livingwood_log', 'livingwood', 'stripped_livingwood_log', 'stripped_livingwood',
        'dreamwood_log', 'dreamwood', 'stripped_dreamwood_log', 'stripped_dreamwood']
    
    logTypes.forEach(logInput);

    function logInput(log) {
        event.recipes.botania.mana_infusion(`botania:glimmering_${log}`, `botania:${log}`, 100)

        gt.mana_infusion(`glamify_${log}`)
            .itemInputs(`botania:${log}`)
            .inputFluids('manafluid:mana 1')
            .itemOutputs(`botania:glimmering_${log}`)
            .duration(200)
            .EUt(7)
    }

    event.shaped('6x botania:livingwood_planks', [
        'A',
        'B'
    ], {
        A: '#forge:tools/saws',
        B: '#botania:livingwood_logs'
    })

    event.shaped('6x botania:dreamwood_planks', [
        'A',
        'B'
    ], {
        A: '#forge:tools/saws',
        B: '#botania:dreamwood_logs'
    })

    gt.cutter('cut_livingwood_logs')
        .itemInputs('#botania:livingwood_logs')
        .itemOutputs('6x botania:livingwood_planks', '2x gtceu:wood_dust')
        .duration(400)
        .EUt(7)
        
    gt.cutter('cut_dreamwood_logs')
        .itemInputs('#botania:dreamwood_logs')
        .itemOutputs('6x botania:dreamwood_planks', '2x gtceu:wood_dust')
        .duration(400)
        .EUt(7)
    //#endregion



    //#region cell

    gt.compressor('compress_biomass')
        .itemInputs('9x gtceu:bio_chaff')
        .itemOutputs('botania:cell_block')
        .duration(600)
        .EUt(2)

    //#endregion

})