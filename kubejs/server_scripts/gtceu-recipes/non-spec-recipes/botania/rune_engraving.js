ServerEvents.recipes(event => {
const engrave = event.recipes.gtceu.rune_inscription
//#region controller

    event.shaped('gtceu:runic_engraver', [
        'ECE',
        'ADA',
        'BAB'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:copper_single_cable',
        C: 'gtceu:mv_emitter',
        D: 'astrogreg:manasteel_brick_machine_casing',
        E: 'astrogreg:mv_stabilizer'
    })

//#endregion



//#region basic runes

    engrave('fire_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('minecraft:blaze_powder', 'gtceu:dark_ash_dust', 'gtceu:coke_gem', 'minecraft:brick', 'gtceu:copper_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 50')
        .itemOutputs('2x botania:fire_rune')
        .duration(200)
        .EUt(64)
    
    engrave('water_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('minecraft:bucket', 'minecraft:clay', 'minecraft:bone_meal', 'minecraft:ice', 'gtceu:salt_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 50')
        .itemOutputs('2x botania:water_rune')
        .duration(200)
        .EUt(64)
        
    engrave('earth_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('#forge:stone', 'minecraft:coal', 'minecraft:dirt', 'minecraft:gravel', 'gtceu:iron_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 50')
        .itemOutputs('2x botania:earth_rune')
        .duration(200)
        .EUt(64)
        
    engrave('air_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('#forge:glass/silica', 'minecraft:string', 'gtceu:tin_rotor', '#minecraft:wool', 'gtceu:quartz_sand_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 50')
        .itemOutputs('2x botania:air_rune')
        .duration(200)
        .EUt(64)
        
    engrave('spring_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:manasteel_ingot', '#forge:seeds', '#minecraft:saplings', 'botania:fire_rune', 'botania:water_rune', 'botania:livingrock')
        .inputFluids('manafluid:mana 75')
        .itemOutputs('botania:spring_rune')
        .duration(200)
        .EUt(64)
        
    engrave('summer_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('#minecraft:smelts_to_glass', 'botania:manasteel_ingot', '#minecraft:logs', 'botania:earth_rune', 'botania:air_rune', 'botania:livingrock')
        .inputFluids('manafluid:mana 75')
        .itemOutputs('botania:summer_rune')
        .duration(200)
        .EUt(64)
        
    engrave('autumn_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:manasteel_ingot', '#forge:crops', '#minecraft:leaves', 'botania:air_rune', 'botania:fire_rune', 'botania:livingrock')
        .inputFluids('manafluid:mana 75')
        .itemOutputs('botania:autumn_rune')
        .duration(200)
        .EUt(64)
        
    engrave('winter_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:manasteel_ingot', 'minecraft:snow_block', 'minecraft:blue_ice', 'botania:water_rune', 'botania:earth_rune', 'botania:livingrock')
        .inputFluids('manafluid:mana 75')
        .itemOutputs('botania:winter_rune')
        .duration(200)
        .EUt(64)
        
    engrave('gluttony_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:winter_rune', 'botania:fire_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:gluttony_rune')
        .duration(200)
        .EUt(64)
        
    engrave('lust_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:summer_rune', 'botania:air_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:lust_rune')
        .duration(200)
        .EUt(64)
        
    engrave('pride_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:autumn_rune', 'botania:earth_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:pride_rune')
        .duration(200)
        .EUt(64)
        
    engrave('envy_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:winter_rune', 'botania:water_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:envy_rune')
        .duration(200)
        .EUt(64)
        
    engrave('wrath_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:summer_rune', 'botania:fire_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:wrath_rune')
        .duration(200)
        .EUt(64)
        
    engrave('sloth_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:winter_rune', 'botania:earth_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:sloth_rune')
        .duration(200)
        .EUt(64)
        
    engrave('greed_rune')
        .notConsumable('botania:lens_normal')
        .itemInputs('botania:spring_rune', 'botania:water_rune', 'botania:mana_rune', 'botania:dragonstone', 'botania:livingrock')
        .inputFluids('manafluid:mana 150')
        .itemOutputs('botania:greed_rune')
        .duration(200)
        .EUt(64)

    //#endregion



    //#region spawn eggs

    engrave('chicken_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('botania:life_rune', 'botania:air_rune', '4x #forge:seeds', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:chicken_spawn_egg')
        .duration(200)
        .EUt(64)
    
    engrave('wolf_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:mutton', 'minecraft:chicken', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:wolf_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cod_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', 'minecraft:water_bucket', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cod_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('glow_squid_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:squid_spawn_egg', 'botania:life_rune', 'gtceu:phosphorus_dust', 'gtceu:gold_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:glow_squid_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('bee_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:air_rune', 'botania:summer_rune', 'gtceu:gold_dust', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:bee_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cat_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cat_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('cow_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', '2x minecraft:wheat', 'minecraft:bucket', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:cow_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('squid_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:water_rune', 'minecraft:black_dye', '#minecraft:fishes', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:squid_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('pig_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:gluttony_rune','minecraft:carrot', 'minecraft:potato', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:pig_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('parrot_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', 'botania:air_rune', 'botania:summer_rune', 'minecraft:green_dye', 'minecraft:red_dye', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:parrot_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('axolotl_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg','botania:life_rune', 'botania:water_rune', 'botania:earth_rune', '2x minecraft:pink_dye', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:axolotl_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('sheep_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:egg', 'botania:life_rune', '2x minecraft:wheat', 'minecraft:shears', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('minecraft:sheep_spawn_egg')
        .duration(200)
        .EUt(64)
            
    engrave('glacian_spawn_egg')
        .notConsumable('botania:terra_lens')
        .itemInputs('minecraft:sheep_spawn_egg', 'botania:life_rune', 'botania:space_rune', 'minecraft:snow', 'minecraft:ice', 'botania:livingrock')
        .inputFluids('manafluid:mana 1000')
        .itemOutputs('ad_astra:glacian_ram_spawn_egg')
        .duration(200)
        .EUt(64)
    
    //#endregion



    //#region advanced runes
    
    engrave('mana_rune')
        .notConsumable('botania:terra_lens')
        .itemInputs('botania:mana_pearl', 'botania:manaweave_cloth', 'botania:manasteel_ingot', 'botania:mana_diamond', 'botania:livingrock')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:mana_rune')
        .duration(200)
        .EUt(256)

    engrave('space_rune')
        .notConsumable('botania:terra_lens')
        .itemInputs('ae2:fluix_crystal', 'astrogreg:asteroid_stone', 'minecraft:end_stone', 'botania:mana_diamond', 'botania:livingrock')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:space_rune')
        .duration(200)
        .EUt(256)

    engrave('life_rune')
        .notConsumable('botania:terra_lens')
        .itemInputs('botania:fire_rune', 'botania:air_rune', 'botania:earth_rune', 'botania:water_rune', 'botania:terrasteel_ingot', 'botania:livingrock')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:life_rune')
        .duration(200)
        .EUt(256)

    engrave('energy_rune')
        .notConsumable('botania:terra_lens')
        .itemInputs('botania:fire_rune', '3x gtceu:red_alloy_dust', 'botania:manasteel_ingot', 'botania:livingrock')
        .inputFluids('manafluid:mana 200')
        .itemOutputs('botania:energy_rune')
        .duration(200)
        .EUt(256)

    //#endregion



    //#region planetary runes

    // engrave('_rune')
    //     .itemInputs('', '', '', '', 'botania:tiny_planet', 'botania:livingrock')
    //     .notConsumable('botania:pixie_lens')
    //     .inputFluids('manafluid:mana 500')
    //     .itemOutputs('botania:_rune')
    //     .duration(600)
    //     .EUt(1024)

    //#endregion
})