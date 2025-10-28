// ServerEvents.recipes(event => {
//     const id = global.id

//     const LMHconverterMaterials = { lv: 'energized_steel', mv: '', hv: ''}
//     const EILZUUconverterMaterials = { ev: '', iv: '', luv: '', zpm: '', uv: '', uhv: ''}
    
//     function converterCraftingRecipe(amps,thickness){
//         for (const [tier, superconductor] of Object.entries(EILZUUconverterMaterials)) {
//             event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
//                 '   ',
//                 'ACA',
//                 'ABA'
//             ], {
//                 A: `gtceu:${superconductor}_${thickness}_wire`,
//                 B: `gtceu:${tier}_machine_hull`,
//                 C: `#gtceu:circuits/${tier}`
//             })
//             .id(`gtceu:shaped/${tier}_${amps}_energy_converter`)};

//         for (const [tier, superconductor] of Object.entries(LMHconverterMaterials)) {
//             event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
//                 '   ',
//                 'ACA',
//                 'ABA'
//             ], {
//                 A: `gtceu:${superconductor}_${thickness}_wire`,
//                 B: `gtceu:${tier}_machine_hull`,
//                 C: `#gtceu:circuits/${tier}`
//             })
//             .id(`gtceu:shaped/${tier}_${amps}_energy_converter`)};
//     };
    
//     converterCraftingRecipe('1a','sing');
//     converterCraftingRecipe('4a','quad');
//     converterCraftingRecipe('8a','octo');
//     converterCraftingRecipe('16a','hexdec');

// });