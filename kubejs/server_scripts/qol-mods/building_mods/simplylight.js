ServerEvents.recipes(event => {
    event.shaped('16x simplylight:illuminant_block_on', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'minecraft:glowstone'
    })

    event.shaped('4x simplylight:lamp_post', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: '#simplylight:any_lamp_on',
        B: 'gtceu:iron_rod'
    })

    event.shaped('6x simplylight:illuminant_slab', [
        'AAA'
    ], {
        A: '#simplylight:any_lamp_on'
    })

    event.shaped('8x simplylight:rodlamp', [
        'A',
        'A',
        'A'
    ], {
        A: '#simplylight:any_lamp_on'
    })

    event.shaped('8x simplylight:lightbulb', [
        'AAA'
    ], {
        A: 'simplylight:rodlamp'
    })

    event.shaped('16x simplylight:edge_light', [
        'AAA'
    ], {
        A: 'simplylight:illuminant_panel'
    })    

    event.shaped('16x simplylight:wall_lamp', [
        'AA ',
        'A  '
    ], {
        A: '#simplylight:any_lamp_on'
    })
})