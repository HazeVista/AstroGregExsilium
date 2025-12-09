//builder is a courtesy of PhoenixVine, from Phoenix Forge Technologies

global.elemCreator = (event) => {
    return (name, proton, neutron, symbol) => {
        event.create(name)
            .protons(proton)
            .neutrons(neutron)
            .symbol(symbol)
    }
}