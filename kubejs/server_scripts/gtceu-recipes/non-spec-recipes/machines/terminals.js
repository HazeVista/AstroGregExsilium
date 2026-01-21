ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    gt.shaped('gtceu:terminal', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: 'gtceu:silver_bolt',
        B: '#c:glass_panes',
        C: 'gtceu:iron_plate',
        D: '#gtceu:circuits/ulv',
        E: 'gtceu:fine_tin_wire'
    })
    .addMaterialInfo()

    gt.shaped('gtceuterminal:schematic_interface', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: 'gtceu:gold_bolt',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:black_steel_plate',
        D: 'gtceu:mv_sensor',
        E: 'gtceu:fine_red_alloy_wire'
    })
    .addMaterialInfo()

    gt.shaped('gtceuterminal:multi_structure_manager', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: 'gtceu:blue_alloy_bolt',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:blue_steel_plate',
        D: 'gtceu:hv_sensor',
        E: 'gtceu:fine_electrum_wire'
    })
    .addMaterialInfo()

    // gt.shaped('gtceuterminal:dismantler', [
    //     'ABA',
    //     'CDC',
    //     'CEC'
    // ], {
    //     A: 'gtceu:_bolt',
    //     B: 'gtceu:computer_monitor_cover',
    //     C: 'gtceu:iron_plate',
    //     D: '#gtceu:circuits/mv',
    //     E: 'astrogreg:fine_etrium_wire'
    // })
    // .addMaterialInfo()
})