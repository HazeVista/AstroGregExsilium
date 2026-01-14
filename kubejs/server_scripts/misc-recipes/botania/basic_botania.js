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
        A: 'astrogreg:cobbled_asteroid_stone',
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
        .itemInputs('4x botania:manasteel_nugget', '4x gtceu:double_gold_plate', 'gtbotania:exquisite_mana_diamond_gem')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('botania:mana_pylon')
        .duration(400)
        .EUt(120)
    
    //#endregion


    
    //#region mana infusion
    event.recipes.botania.mana_infusion('botania:manaweave_cloth', 'farmersdelight:canvas', 4000)
    event.recipes.botania.mana_infusion('botania:mana_powder', '#forge:stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:managlass', 'gtceu:tempered_glass', 100)
    event.recipes.botania.mana_infusion('gtbotania:exquisite_mana_diamond_gem', 'gtceu:exquisite_diamond_gem', 40000)
    event.recipes.botania.mana_infusion('gtbotania:flawless_mana_diamond_gem', 'gtceu:flawless_diamond_gem', 20000)
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
    event.shaped('4x gtbotania:manasteel_dust', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'botania:mana_powder',
        B: 'gtceu:wrought_iron_dust'
    })

    gt.mixer('mix_manasteel_dust')
        .itemInputs('botania:mana_powder', 'gtceu:wrought_iron_dust')
        .itemOutputs('gtbotania:manasteel_dust')
        .duration(80)
        .EUt(7)

    const glassPanes = [
        ['managlass', 'managlass_pane'],
        ['bifrost_perm', 'bifrost_pane'],
        ['alfglass', 'alfglass_pane']
    ]

    glassPanes.forEach(([input, output]) => {
        event.shaped(`2x botania:${output}`, [
            'AB'
        ], {
           A: `botania:${input}`,
           B: '#forge:tools/saws'
        })    

        gt.cutter(`cutting_${input}`)
            .itemInputs(`3x botania:${input}`)
            .itemOutputs(`8x botania:${output}`)
            .duration(50)
            .EUt(7)
    })

    gt.forge_hammer('forge_hammer_gaia_shard')
        .itemInputs('botania:life_essence')
        .itemOutputs('5x botanicadds:gaia_shard')
        .duration(100)
        .EUt(2000)

    gt.mixer('mix_inactive_terrasteel')
        .itemInputs('gtbotania:manasteel_dust', 'gtceu:beryllium_dust', 'gtceu:aluminium_dust')
        .itemOutputs('3x gtbotania:dormant_terrasteel_dust')
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
        C: 'gtbotania:manasteel_plate'
    })

    event.shaped('botania:forest_eye', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtbotania:manasteel_plate',
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
        C: 'gtbotania:double_elementium_plate',
        D: 'botania:pixie_lens'
    })

    event.shaped('botania:gaia_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: '#botania:dreamwood_logs',
        B: 'botania:elven_spreader',
        C: 'gtbotania:double_gaiasteel_plate',
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
       A: 'gtbotania:manasteel_frame',
       B: 'botania:livingrock',
       C: 'gtbotania:manasteel_ring'
    })

    event.shaped('2x botania:pump', [
        'ADA',
        'C B',
        'ADA'
    ], {
       A: 'gtbotania:manasteel_plate',
       B: '#forge:tools/hammers',
       C: '#forge:tools/wrenches',
       D: 'botania:livingrock'
    })

    event.shaped('botania:alchemy_catalyst', [
        'BBB',
        'CAC',
        'BBB'
    ], {
        A: 'gtbotania:flawless_mana_diamond_gem',
        B: 'botania:livingrock',
        C: 'gtceu:gold_double_plate'
    })
    //#endregion



    //#region manasteel cooking
    const manasteelFuels = [
        ['minecraft:charcoal', 900],
        ['minecraft:coal', 900],
        ['gtceu:coke_gem', 750],
        ['gtceu:charcoal_dust', 900],
        ['gtceu:coal_dust', 900],
        ['gtceu:coke_dust', 750]
    ]

    manasteelFuels.forEach(([fuel, duration]) => {
        gt.primitive_blast_furnace(`manasteel_${fuel.replace(/:/g, '_')}`)
            .itemInputs('gtbotania:manasteel_dust', fuel)
            .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
            .duration(duration)
    })
    //#endregion



    //#region trinkets
    event.shaped('botania:crafting_halo', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtbotania:manasteel_plate',
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
        B: 'gtbotania:terrasteel_ring'
    })

    event.shaped('botania:bauble_box', [
        'BCB',
        'BAB',
        'BBB'
    ], {
        A: '#forge:chests',
        B: 'gtbotania:manasteel_plate',
        C: 'gtceu:gold_ring'
    })

    event.shaped('botania:sextant', [
        ' AC',
        ' AA',
        'BBB'
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtbotania:manasteel_plate',
        C: 'gtbotania:manasteel_rod'
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
        B: 'gtbotania:terrasteel_plate',
        C: 'botania:mana_tablet'
    })
    //#endregion


    
    //#region tools
    const shears = [
        ['manasteel', 'gtbotania:manasteel_plate'],
        ['elementium', 'gtbotania:elementium_plate']
    ]

    shears.forEach(([type, plate]) => {
        event.shaped(`botania:${type}_shears`, [
            'AB',
            'BC'
        ], {
           A: '#forge:tools/hammers',
           B: plate,
           C: '#forge:tools/files'
        })
    })

    event.shaped('botania:open_bucket', [
        'BAB',
        ' B '
    ], {
        A: '#forge:tools/hammers',
        B: 'gtbotania:elementium_plate'
    })

    const terrasteelArmor = [
        ['boots', 'botania:winter_rune', 'botania:manasteel_boots'],
        ['leggings', 'botania:autumn_rune', 'botania:manasteel_leggings'],
        ['helmet', 'botania:spring_rune', 'botania:manasteel_helmet'],
        ['chestplate', 'botania:summer_rune', 'botania:manasteel_chestplate']
    ]

    terrasteelArmor.forEach(([piece, rune, base]) => {
        event.shaped(`botania:terrasteel_${piece}`, [
            'ACA',
            'BDB',
            ' B '
        ], {
            A: 'botania:livingwood_twig',
            B: 'gtbotania:terrasteel_plate',
            C: rune,
            D: base
        })
    })
    //#endregion



    //#region lenses
    event.shaped('botania:lens_normal', [
        'B',
        'A'
    ], {
       A: 'gtbotania:manasteel_ring',
       B: 'botania:managlass_pane'
    })

    event.shaped('botania:terra_lens', [
        'B',
        'A'
    ], {
       A: 'gtbotania:terrasteel_ring',
       B: 'gtbotania:mana_diamond_lens'
    })

    event.shaped('botania:gaia_lens', [
        'B',
        'A'
    ], {
       A: 'gtceu:gaiasteel_ring',
       B: 'gtbotania:dragonstone_lens'
    })

    event.shaped('botania:pixie_lens', [
        'B',
        'A'
    ], {
       A: 'gtbotania:elementium_ring',
       B: 'gtbotania:dragonstone_lens'
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
    const basicManasteelRings = [
        ['mana_ring', 'botania:mana_tablet'],
        ['magnet_ring', 'botania:lens_magnet'],
        ['aura_ring', 'botania:mana_rune']
    ]

    basicManasteelRings.forEach(([ring, catalyst]) => {
        event.shaped(`botania:${ring}`, [
            'CB ',
            'BAB',
            ' B '
        ], {
            A: 'gtbotania:manasteel_ring',
            B: 'gtbotania:manasteel_plate',
            C: catalyst
        })
    })
    
    event.shaped('botania:water_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'gtbotania:manasteel_ring',
        B: 'gtbotania:manasteel_plate',
        C: 'botania:water_rune',
        D: '#minecraft:fishes'
    })
    
    event.shaped('botania:swap_ring', [
        'CBD',
        'BAB',
        'EBF'
    ], {
        A: 'gtbotania:manasteel_ring',
        B: 'gtbotania:manasteel_plate',
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
        A: 'gtbotania:manasteel_ring',
        B: 'gtbotania:manasteel_plate',
        C: 'botania:air_rune',
        D: 'botania:fire_rune'
    })
    
    event.shaped('botania:mining_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'gtbotania:manasteel_ring',
        B: 'gtbotania:manasteel_plate',
        C: 'botania:earth_rune',
        D: 'minecraft:diamond_pickaxe'
    })
    
    const upgradeRings = [
        ['magnet_ring_greater', 'botania:magnet_ring', 'botania:lens_magnet'],
        ['aura_ring_greater', 'botania:aura_ring', 'botania:mana_rune'],
        ['mana_ring_greater', 'botania:mana_ring', 'botania:mana_tablet']
    ]

    upgradeRings.forEach(([output, base, catalyst]) => {
        event.shaped(`botania:${output}`, [
            'CB ',
            'BAB',
            ' B '
        ], {
            A: base,
            B: 'gtbotania:terrasteel_plate',
            C: catalyst
        })
    })

    event.shaped('botania:pixie_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtbotania:elementium_ring',
        B: 'gtbotania:elementium_plate',
        C: 'botania:pixie_dust'
    })

    event.shaped('botania:reach_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtbotania:elementium_ring',
        B: 'gtbotania:elementium_plate',
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
    const sparkAugments = [
        ['dispersive', 'botania:water_rune'],
        ['dominant', 'botania:fire_rune'],
        ['recessive', 'botania:earth_rune'],
        ['isolated', 'botania:air_rune']
    ]

    sparkAugments.forEach(([type, rune]) => {
        event.shaped(`botania:spark_upgrade_${type}`, [
            'CAC',
            'ABA',
            'CAC'
        ], {
            A: 'gtbotania:manasteel_plate',
            B: rune,
            C: 'botania:pixie_dust'
        })
    })

    event.shaped('botania:spark_changer', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtbotania:elementium_plate',
        B: 'botania:livingrock',
        C: 'gtbotania:manasteel_plate'
    })
    //#endregion

    

    //#region quartz
    const quartzTypes = ['dark', 'red', 'mana', 'blaze', 'lavender', 'sunny']

    quartzTypes.forEach(quartz => {
        event.shaped(`4x botania:quartz_${quartz}`, [
            'A'
        ], {
            A: `botania:${quartz}_quartz`
        })
    })

    event.shaped(`4x botania:quartz_elven`, [
        'A'
    ], {
        A: `botania:elf_quartz`
    })

    const quartzDyes = [
        ['blaze', 'minecraft:orange_dye'],
        ['dark', 'minecraft:black_dye'],
        ['red', 'minecraft:red_dye'],
        ['mana', 'minecraft:light_blue_dye'],
        ['lavender', 'minecraft:purple_dye'],
        ['elven', 'minecraft:lime_dye'],
        ['sunny', 'minecraft:yellow_dye']
    ]

    quartzDyes.forEach(([type, dye]) => {
        event.shaped(`botania:quartz_${type}`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:quartz',
            B: dye
        })
    })
    //#endregion



    //#region logs
    const logTypes = ['livingwood_log', 'livingwood', 'stripped_livingwood_log', 'stripped_livingwood',
        'dreamwood_log', 'dreamwood', 'stripped_dreamwood_log', 'stripped_dreamwood']
    
    logTypes.forEach(log => {
        event.recipes.botania.mana_infusion(`botania:glimmering_${log}`, `botania:${log}`, 100)

        gt.mana_infusion(`glamify_${log}`)
            .itemInputs(`botania:${log}`)
            .inputFluids('manafluid:mana 1')
            .itemOutputs(`botania:glimmering_${log}`)
            .duration(200)
            .EUt(7)
    })

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



    //#region mana fluxfield
    gt.assembler('mana_fluxfield_tin')
        .itemInputs('astrogreg:livingbricks', '2x gtbotania:manasteel_gear', '2x astrogreg:lv_stabilizer', 'botania:energy_rune')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('botania:mana_fluxfield')
        .duration(300)
        .EUt(30)
        .circuit(1)
        .addMaterialInfo(true)
        
    gt.assembler('mana_fluxfield_soldering_alloy')
        .itemInputs('astrogreg:livingbricks', '2x gtbotania:manasteel_gear', '2x astrogreg:lv_stabilizer', 'botania:energy_rune')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('botania:mana_fluxfield')
        .duration(300)
        .EUt(30)
        .circuit(1)
        .addMaterialInfo(true)
    //#endregion



    //#region bottles
    event.shaped('botania:vial', [
        'A A',
        ' A '
    ], {
        A: 'botania:managlass_pane'
    })
    
    event.shaped('botania:flask', [
        'A A',
        ' A '
    ], {
        A: 'botania:alfglass_pane'
    })
    //#endregion
})