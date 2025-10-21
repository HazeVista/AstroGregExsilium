// GTCEu Element Registration (with thanks to @PhoenixVine for the builder code)

function makeElement(event, id, prot, neut, sym) {
    event.create(id)
        .protons(prot)
        .neutrons(neut)
        .symbol(sym);
}

GTCEuStartupEvents.registry("gtceu:element", event => {

    const elements = [
        ["mystery", -1, -1, "?"],
        ["desh", -1, -1, "De"]
            ];

    elements.forEach(elem => {
        makeElement(event, elem[0], elem[1], elem[2], elem[3]);
    });

});