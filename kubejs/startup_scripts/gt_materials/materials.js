//credit to @trulyno and the Star Technology team for this beautiful code and extra periodic elements
// Ignore this
const $IngotProperty = global.IngotProperty;
const $DustProperty = global.DustProperty;
const $FluidProperty = global.FluidProperty;
const $BlastProperty = global.BlastProperty;
const $FluidPipeProperties = global.FluidPipeProperties;

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;

//Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;

// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;

// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;

// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;

// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;

// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

// Useful functions
const V = (voltage) => {
    return global.v[voltage];
}

const VA = (voltage) => {
    return global.va[voltage];
}

const VH = (voltage) => {
    return global.vh[voltage];
}

const VHA = (voltage) => {
    return global.vha[voltage];
}

GTCEuStartupEvents.registry('gtceu:material', event => {

    // // Periodic table materials
    // const element = global.periodicTableElement;
    // // Ingots
    // element('zirconium', 'ingot');
    // element('tellurium', 'ingot');
    // element('polonium', 'ingot');
    // element('astatine', 'ingot');
    // element('hafnium', 'ingot');
    // element('seaborgium', 'ingot');
    // element('flerovium', 'ingot');
    // element('rhenium', 'ingot');

    // // Dusts
    // element('selenium', 'dust');
    // element('strontium', 'dust');
    // element('thallium', 'dust');

    // // Liquids
    // element('seaborgium', 'fluid');
    // element('flerovium', 'fluid');

    // // Gasses

    // // periodicTableElement('iodine', 'gas');
    // element('oganesson', 'gas');

    // Plasmas

    // Material modification
    const matmod = (mat, flag) => {
        GTMaterials.get(mat).addFlags(flag);
    }

     // Blast Properties of periodic table metals
    const blast = global.blastProperty;

    //Fluid Pipes

    // Materials from elements
    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const elemIngot = (name, element, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquid = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquidSeccolor = (name, elements, color1, color2, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags);
        }
    }

    const elemIngotFluid = (name, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags);
        }
    }
    
    const compLiquid = (name, elements, color, flags) => {
        event.create(name).fluid().components(elements).color(color).flags(flags);
    }

    const elemFluid = (name, element, color, flags) => {
        event.create(name).fluid().element(GTElements.get(element)).color(color).flags(flags);
    }

    const compLiquidTemp = (name, heat, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(heat)).components(elements).color(color).flags(flags);
    }
    
    const compLiquidStill = (name, elements, flags) => {
        event.create(name).liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill()).components(elements).flags(flags);
    }
    
    const compDustLiquid = (name, elements, color, flags) => {
        event.create(name).dust().fluid().components(elements).color(color).flags(flags);
    }

    const elemDustFluid = (name, color, flags) => {
        event.create(name).dust().fluid().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compDust = (name, elements, color, flags) => {
        event.create(name).dust().components(elements).color(color).flags(flags);
    }
    
    const compDustIcon = (name, elements, color, icon, flags) => {
        event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemDust = (name, color, flags) => {
        event.create(name).dust().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compGem = (name, elements, color, icon, flags) => {
        event.create(name).gem().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemGem = (name, color, icon, flags) => {
        event.create(name).gem().element(GTElements.get(name)).iconSet(icon).color(color).flags(flags);
    }
    
    const compGas = (name, elements, color, flags) => {
        event.create(name).gas().components(elements).color(color).flags(flags);
    }

    const elemGas = (name, color, flags) => {
        event.create(name).gas().element(GTElements.get(name)).color(color).flags(flags);
    }

    const polymerFluid = (name, elements, color, pipe, flags) => {
            event.create(name).polymer().fluid().components(elements).color(color).flags(flags).fluidPipeProperties(pipe[0], pipe[1], pipe[2], pipe[3], pipe[4], pipe[5]);
    }

    const conductor = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }
    
    const conductorSuper = (name, elements, color, blasting, cable, rotorstat) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        }
    }

    const compDustLiquidOre = (name, elements, color, flags) => {
        event.create(name).dust().liquid().ore(2, 1).components(elements).color(color).flags(flags);
    }
    
    const compDustOreIngot = (name, elements, color, blasting) => {
        if (blasting.includes(blasting[0])){
        event.create(name).ingot().dust().ore(2, 1).components(elements).color(color).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).flags(no_decomp);
        } else {
        event.create(name).ingot().dust().ore(2, 1).components(elements).color(color).flags(no_decomp);
        }
    }
    
    const compGemOre = (name, elements, color, icon) => {
        event.create(name).gem().ore(2, 1).components(elements).color(color).iconSet(icon);
    }

    const compIngotPlasma = (name, elements, color, icon, blasting, flags) => {
        event.create(name).ingot().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], [1], blasting[2], blasting[3]);
    }

    const conductorPlasma = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }

    // elemIngot('magnetic_zapolgium', GTElements.get('zapolgium'), 0xcc00cc, MAGNETIC, [], [rod, long_rod, magnetic]);

    // event.create('zapolgium')
    //     .ingot()
    //     .element(GTElements.get('zapolgium'))
    //     .color(0xcc00cc)
    //     .iconSet(DULL)
    //     .blastTemp(10799, 'highest', VA('uhv'), 1600)
    //     .flags(plates, rod, frame)
    //     .fluidPipeProperties(18000, 7200, true,true,true,true);

    //create
    compDust('andesite_alloy', ['1x andesite', '1x iron'], 0xa6a08f, [centrifuge]);

    //ad astra & ad extendrum
    compDustOreIngot('desh', ['1x desh'], 0xD38B4C, [])

    //superconductors
    conductorSuper('energized_steel', ['1x electrum', '2x desh'], 0xbaa172, [], [V('lv'), 4, 0, true], [150, 130, 3, 37600]);

    // conductorSuper('', ['1x silver', '3x copper', '4x redstone'], 0xff3300, [1700, 'low', VA('mv'), 1200], [V('mv'), 16, 0, true], [190, 150, 3, 24000]);

    // conductorSuper('', ['1x silver', '3x tin', '2x glowstone'], 0xffffb3, [1700, 'low', VA('hv'), 1500], [V('hv'), 16, 0, true], [220, 170, 3, 24000]);

    // conductorSuper('', ['3x lead', '1x diamond', '2x ender_pearl'], 0x006666, [3500, 'low', VA('ev'), 1500], [V('ev'), 32, 0, true], [300, 190, 3, 45600]);

    // conductorSuper('', ['1x black_bronze', '3x signalum'], 0x9933ff, [4400, 'mid', VA('iv'), 1800], [V('iv'), 64, 0, true], [450, 220, 3, 37600]);

    // conductorSuper('', ['3x manganese_phosphide', '2x amethyst', ''], 0xf66999, [5300, 'mid', VA('luv'), 2100], [V('luv'), 64, 0, true], [700, 260, 3, 24000]);

    // conductorSuper('', ['4x tungsten', '8x magnesium_diboride', '2x cadmium'], 0x3333cc, [7100, 'high', VA('zpm'), 2400], [V('zpm'), 96, 0, true], [1100, 380, 3, 32000]);

    // conductorSuper('', ['8x naquadah', '4x mercury_barium_calcium_cuprate', '7x tungsten_carbide'], 0x66ffff, [9000, 'high', VA('zpm'), 2700], [V('uv'), 48, 0, true], [1600, 470, 3, 48000]);

    // conductorSuper('', ['2x uranium_triplatinum', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium'], 0xd9b3ff, [10000, 'higher', VA('uv'), 3000], [V('uv'), 128, 0, true], [2000, 550, 3, 64000]);

    // conductorSuper('', ['12x neutronium', '', '1x samarium_iron_arsenic_oxide'], 0xccffff, [10799, 'highest', VA('uhv'), 4000], [V('uhv'), 192, 0, true], [3200, 660, 3, 96000]);

    //AE2
    compIngotLiquidSeccolor('futura_alloy', ['4x stainless_steel', '1x mystery'], 0xebb7ea, 0x000000, SHINY, [1700, 'low', 400, 1200], [frame, plates, rod, dense_plate, centrifuge, mortar_grind, block])
});

//item integration
GTCEuStartupEvents.materialModification(event => {
TagPrefix.ingot.setIgnored("energized_steel", () => Item.getItem("powah:energized_steel_ingot"))
TagPrefix.block.setIgnored("energized_steel", () => Item.getItem("powah:energized_steel_block"))
TagPrefix.nugget.setIgnored("energized_steel", () => Item.getItem("powah:energized_steel_nugget"))
})