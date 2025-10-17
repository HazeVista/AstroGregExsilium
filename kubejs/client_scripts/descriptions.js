ItemEvents.tooltip(event => {

    event.addAdvanced('gtceu:greenhouse', (item, advanced, text) => {
        text.add(Text.of('§cElectric Log Production!'));
    });

})