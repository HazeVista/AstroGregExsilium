ServerEvents.recipes(event => {

    event.shaped('gtceu:rubber_plate', [
        'A',
        'B',
        'B'
    ] , {
        A: '#forge:tools/hammers',
        B: 'gtceu:rubber_ingot'
    })

    event.recipes.gtceu.alloy_smelter('alloy_smelter_rose_quartz')
    .itemInputs('minecraft:quartz', '4x minecraft:redstone')
    .itemOutputs('create:rose_quartz')
    .duration(50)
    .EUt(30)

    event.campfireCooking('gtceu:glass_dust', 'minecraft:glass', 0, 160)
    event.campfireCooking('minecraft:iron', 'gtceu:wrought_iron', 0, 160)

    event.custom({
        'type': 'farmersdelight:cooking',
        'recipe_book_tab': 'misc',
        'ingredients': [
          {
            'item': 'gtceu:raw_rubber_pulp',
            'count': 3,
          },
          {
            'item': 'gtceu:sulfur_dust'
          }
        ],
        'result': {
          'item': 'gtceu:rubber_ingot',
          'count': 1,
        },
        'cookingtime': 320
    });

    event.custom({
        'type': 'farmersdelight:cooking',
        'recipe_book_tab': 'misc',
        'ingredients': [
          {
            'item': 'gtceu:desh_dust'
          },
          {
            'item': 'gtceu:iron_dust'
          },
          {
            'item': 'gtceu:red_alloy_dust'
          }
        ],
        'result': {
          'item': 'powah:energized_steel',
          'count': 3,
        },
        'cookingtime': 200
    });

    event.recipes.gtceu.mixer('mixing_energized_steel_dust')
        .itemInputs('gtceu:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust')
        .itemOutputs('gtceu:energized_steel_dust')
        .duration(200)
        .EUt(7)

});