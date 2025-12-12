//priority: 1

const IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const FluidPipeProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties');
const ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');

//Global values are a courtesy of TrulyNo from Star Technology

//#region icon sets
global.iconSets = {
    dull: GTMaterialIconSet.DULL,
    metallic: GTMaterialIconSet.METALLIC,
    magnetic: GTMaterialIconSet.MAGNETIC,
    shiny: GTMaterialIconSet.SHINY,
    bright: GTMaterialIconSet.BRIGHT,
    diamond: GTMaterialIconSet.DIAMOND,
    emerald: GTMaterialIconSet.EMERALD,
    gem_horizontal: GTMaterialIconSet.GEM_HORIZONTAL,
    gem_vertical: GTMaterialIconSet.GEM_VERTICAL,
    ruby: GTMaterialIconSet.RUBY,
    opal: GTMaterialIconSet.OPAL,
    glass: GTMaterialIconSet.GLASS,
    netherstar: GTMaterialIconSet.NETHERSTAR,
    fine: GTMaterialIconSet.FINE,
    sand: GTMaterialIconSet.SAND,
    wood: GTMaterialIconSet.WOOD,
    rough: GTMaterialIconSet.ROUGH,
    flint: GTMaterialIconSet.FLINT,
    lignite: GTMaterialIconSet.LIGNITE,
    quartz: GTMaterialIconSet.QUARTZ,
    certus: GTMaterialIconSet.CERTUS,
    lapis: GTMaterialIconSet.LAPIS,
    fluid: GTMaterialIconSet.FLUID,
    radioactive: GTMaterialIconSet.RADIOACTIVE
}
//#endregion



//#region flags
global.flags = {
    // Generic flags
    no_unify: GTMaterialFlags.NO_UNIFICATION,
    electrolyze: GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING,
    centrifuge: GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    no_decomp: GTMaterialFlags.DISABLE_DECOMPOSITION,
    explosive: GTMaterialFlags.EXPLOSIVE,
    flammable: GTMaterialFlags.FLAMMABLE,
    sticky: GTMaterialFlags.STICKY,
    magnetic: GTMaterialFlags.IS_MAGNETIC,
    glow: GTMaterialFlags.PHOSPHORESCENT,

    plates: GTMaterialFlags.GENERATE_PLATE,
    dense: GTMaterialFlags.GENERATE_DENSE,
    rod: GTMaterialFlags.GENERATE_ROD,
    bolt_and_screw: GTMaterialFlags.GENERATE_BOLT_SCREW,
    frame: GTMaterialFlags.GENERATE_FRAME,
    gear: GTMaterialFlags.GENERATE_GEAR,
    long_rod: GTMaterialFlags.GENERATE_LONG_ROD,
    block: GTMaterialFlags.FORCE_GENERATE_BLOCK,
    foil: GTMaterialFlags.GENERATE_FOIL,
    ring: GTMaterialFlags.GENERATE_RING,
    spring: GTMaterialFlags.GENERATE_SPRING,
    small_spring: GTMaterialFlags.GENERATE_SPRING_SMALL,
    small_gear: GTMaterialFlags.GENERATE_SMALL_GEAR,
    fine_wire: GTMaterialFlags.GENERATE_FINE_WIRE,
    rotor: GTMaterialFlags.GENERATE_ROTOR,
    round: GTMaterialFlags.GENERATE_ROUND,
    
    crystallizable: GTMaterialFlags.CRYSTALLIZABLE,
    lens: GTMaterialFlags.GENERATE_LENS,
    solder_mat: GTMaterialFlags.SOLDER_MATERIAL,
    solder_mat_bad: GTMaterialFlags.SOLDER_MATERIAL_BAD,
    solder_mat_good: GTMaterialFlags.SOLDER_MATERIAL_GOOD,
    more_sifter: GTMaterialFlags.HIGH_SIFTER_OUTPUT,
    no_block_craft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES,
    no_plate_compressor_craft: GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE,
    no_hand_craft: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
    mortar_grind: GTMaterialFlags.MORTAR_GRINDABLE,
    no_working: GTMaterialFlags.NO_WORKING,
    no_smashing: GTMaterialFlags.NO_SMASHING,
    no_smelt: GTMaterialFlags.NO_SMELTING,
    blast_furnace_double: GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE,
    blast_furnace_triple: GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE,
    no_abs_recipe: GTMaterialFlags.DISABLE_ALLOY_BLAST,
    not_alloy: GTMaterialFlags.DISABLE_ALLOY_PROPERTY,
}
//#endregion

global["V"] = {};
global["VA"] = {};
global["VH"] = {};
global["VHA"] = {};
const VoltageNames = GTValues.VN;
VoltageNames.forEach((Tier, index) => {
    global["V"][Tier.toUpperCase()] = GTValues.V[index];
    global["VA"][Tier.toUpperCase()] = GTValues.VA[index];
    global["VH"][Tier.toUpperCase()] = GTValues.VH[index];
    global["VHA"][Tier.toUpperCase()] = GTValues.VHA[index];
    console.log("Registered global voltage variable V: " + Tier + ", value: " + global["V"][Tier.toUpperCase()]);
    console.log("Registered global voltage variable VA: " + Tier + ", value: " + global["VA"][Tier.toUpperCase()]);
    console.log("Registered global voltage variable VH: " +  Tier + ", value: " +  global["VH"][Tier.toUpperCase()]);
    console.log("Registered global voltage variable VHA: " + Tier + ", value: " + global["VHA"][Tier.toUpperCase()]);
});
//#region voltage helpers
//#endregion



//#region periodic helper
global.periodicTableElement = (material, type) => {
    let mat = GTMaterials.get(material);
    switch(type) {
        case 'ingot': mat.setProperty(PropertyKey.INGOT, new IngotProperty()); break;
        case 'dust': mat.setProperty(PropertyKey.DUST, new DustProperty()); break;
        case 'fluid': case 'gas': case 'plasma': case 'exotic': {
            let prop = new FluidProperty();
            switch(type) {
                case 'fluid': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder()); break;
                case 'gas': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder()); break;
                case 'plasma': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder()); break;
                case 'exotic': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.EXOTIC, new GTFluidBuilder()); break;
            }
            mat.setProperty(PropertyKey.FLUID, prop); 
            break;
        }  
    }
}
//#endregion



//#region blast prop helper
global.blastProperty = (material, temperature, gasTier, voltage, duration) => {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new BlastProperty(temperature, gasTier, voltage, duration, -1, -1));
}
//#endregion