StartupEvents.registry('item', event => {

        [{tier:"ULV",color:"§8"},
        {tier:"LV",color:"§7"},
        {tier:"MV",color:"§b"},
        {tier:"HV",color:"§6"},
        {tier:"EV",color:"§5"},
        {tier:"IV",color:"§9"},
        {tier:"LuV",color:"§d"},
        {tier:"ZPM",color:"§c"},
        {tier:"UV",color:"§3"},
        {tier:"UHV",color:"§4"}]
        .forEach(circuit=>{

        event.create(`${circuit.tier.toLowerCase()}_modular_circuit`)
                .texture(`kubejs:item/unicircs/${circuit.tier.toLowerCase()}unicirc`)
                .displayName(`${circuit.color}${circuit.tier}§r Modular Circuit`)
                .tooltip('§o§7Use these with AE2 autocrafting!');

        });
});