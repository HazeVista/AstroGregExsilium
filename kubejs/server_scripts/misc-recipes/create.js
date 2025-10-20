ServerEvents.recipes(event => {
    //shaped recipes
    event.shaped('create:precision_mechanism', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'create:cogwheel',
        B: 'gtceu:brass_screw',
        C: 'gtceu:gold_plate',
        D: '#forge:tools/screwdrivers'
    })

    event.shaped('createaddition:rolling_mill', [
        'ABA',
        'CBC',
        'CDC'
     ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'create:shaft',
        C: 'create:andesite_alloy',
        D: 'create:andesite_casing'
     })

    event.shaped('create:polished_rose_quartz', [
        'B',
        ' A'
    ], {
        A: 'create:rose_quartz',
        B: '#forge:tools/files'
    })

    // Andesite Alloy mostly by @digestlotion

    event.shapeless('2x gtceu:andesite_dust', ['gtceu:stone_dust', 'gtceu:quartz_dust'])
    event.shapeless('1x gtceu:andesite_alloy_dust', ['gtceu:andesite_dust', 'gtceu:iron_dust'])
    event.shapeless('2x create:shaft', ['create:andesite_alloy', '#forge:tools/files'])
    event.smelting('1x create:andesite_alloy', 'gtceu:andesite_alloy_dust')

    event.recipes.create.mixing('2x create:andesite_alloy', ['#forge:dusts/iron', 'gtceu:andesite_dust'])
        .heatRequirement('lowheated')

    event.recipes.gtceu.mixer('mixing_andesite_alloy_dust')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x gtceu:andesite_alloy_dust')
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt')
        .itemInputs( 'minecraft:iron_ingot', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt1')
        .itemInputs( 'gtceu:iron_dust', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)
        
    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt2')
        .itemInputs('minecraft:iron_ingot', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.lathe(`lathing_shaft`)
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.cutter(`cutting_shaft`)
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(60)
        .EUt(15)

    event.recipes.gtceu.lathe('lathe_polished_rose_quartz')
        .itemInputs('create:rose_quartz')
        .itemOutputs('create:polished_rose_quartz')
        .duration(120)
        .EUt(7)

    
    
    //create press

    const platemetals = ['wrought_iron', 'tin', 'bronze', 'potin', 'lead', 'cupronickel',
                        'brass', 'invar', 'gold', 'copper', 'iron', 'red_alloy', 'electrum']

    function pressingplates(metalinput) {

        event.recipes.create.pressing(
            [`gtceu:${metalinput}_plate`],
            [`gtceu:${metalinput}_ingot`])

    }
    
    platemetals.forEach(pressingplates)

    //create crafts & additions
    //polarizer

    event.custom({
        type: "createaddition:charging",
        input: {
            item: "gtceu:iron_rod",
            count: 1
        },
        result: {
            item: "gtceu:magnetic_iron_rod",
            count: 1
        },
        energy: 1000
    })

    //rolling (primitive lathe)

    event.custom({
        type: "createaddition:rolling",
        input: {
            item: "create:andesite_alloy"
        },
        result: {
            item: "create:shaft",
            count: 4
        }
    })

    const rollermetals = ['wrought_iron', 'tin', 'bronze', 'potin', 'lead', 'cupronickel',
                        'brass', 'invar', 'gold', 'copper', 'iron', 'red_alloy', 'electrum']
    function rollerrods(metalinput) {

    event.custom({type:"createaddition:rolling",
        input: {item : `gtceu:${metalinput}_ingot`},
        result: {item: `gtceu:${metalinput}_rod`, count: 2}
    
    })
}       
    rollermetals.forEach(rollerrods)

    //shaped power recipes

    event.shapeless('createaddition:small_light_connector', 
            ['create:electron_tube', 
            'createaddition:connector'])


    event.shapeless('createaddition:portable_energy_interface', 
            ['create:portable_storage_interface', 
            'createaddition:accumulator'])

    event.shapeless('createaddition:electrum_spool', 
            ['gtceu:fine_electrum_wire', 
            'createaddition:empty_spool'])

    event.shapeless('createaddition:copper_spool', 
            ['gtceu:fine_copper_wire', 
            'createaddition:empty_spool'])

    event.shapeless('createaddition:gold_spool', 
            ['gtceu:fine_gold_wire', 
            'createaddition:empty_spool'])
    
    event.shapeless('createaddition:tesla_coil',
            ['createaddition:alternator',
            'createaddition:accumulator']
    )

    event.shapeless('createaddition:large_connector',
            ['gtceu:copper_rod',
            'create:andesite_alloy',
            'create:andesite_alloy']
    )

    event.shapeless('createaddition:connector',
            ['gtceu:copper_rod',
            'create:andesite_alloy',]
    )

    event.shaped('createaddition:alternator', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'create:shaft',
        D: 'gtceu:magnetic_steel_rod'
    })
    event.shaped('createaddition:modular_accumulator', [
        'ABA',
        'C',
        'ABA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'powah:battery_starter',
        C: 'create:brass_casing',
        D: ''
    })
    event.shaped('createaddition:electric_motor', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'create:shaft',
        D: 'gtceu:magnetic_steel_rod'
    })

});