JEIEvents.hideItems(event => {

    event.hide(/gtceu:uev_.*/)
    event.hide(/gtceu:uiv_.*/)
    event.hide(/gtceu:uxv_.*/)
    event.hide(/gtceu:opv_.*/)
    event.hide(/gtceu:max_(?!battery).*/)
    event.hide(/gtceu:.*_passthrough_hatch/)
    event.hide(/create:.*_toolbox/)
    event.hide(/powah:reactor_.*/)
    
})