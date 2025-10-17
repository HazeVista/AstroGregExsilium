// ServerEvents.recipes(event => {
////credit to the Star Technology team for most of this file.
//     const id = global.id;

//     event.remove({ output: /gtceu:.*_energy_converter/ });
    
//     const PRMconverterMaterials = {
//         lv: '',
//         mv: '',
//         hv: ''
//     }

//     const ADVconverterMaterials = {
//         ev: '',
//         iv: '',
//         luv: '',
//         zpm: '',
//         uv: '',
//         uhv: ''
//     }
    
//     function converterCraftingRecipe(amps,thickness){
//         for (const [tier, superconductor] of Object.entries(ADVconverterMaterials)) {
//             event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
//                 '   ',
//                 'WCW',
//                 'WSW'
//             ], {
//                 W: `gtceu:${superconductor}_${thickness}_wire`,
//                 C: `#gtceu:circuits/${tier}`,
//                 S: `gtceu:${tier}_machine_hull`
//             }).id(`start:shaped/${tier}_${amps}_energy_converter`);
//         };
//         for (const [tier, superconductor] of Object.entries(PRMconverterMaterials)) {
//             event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
//                 '   ',
//                 'WCW',
//                 'WSW'
//             ], {
//                 W: `gtceu:${superconductor}_${thickness}_wire`,
//                 C: `#gtceu:circuits/${tier}`,
//                 S: `gtceu:${tier}_machine_hull`
//             }).id(`start:shaped/${tier}_${amps}_energy_converter`);
//         };
//     };
    
//     converterCraftingRecipe('1a','single');
//     converterCraftingRecipe('4a','quadruple');
//     converterCraftingRecipe('8a','octal');
//     converterCraftingRecipe('16a','hex');

// });