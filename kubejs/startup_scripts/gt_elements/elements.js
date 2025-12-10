
GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elemCreator(event);

    elem('mystery', -1, -1, '?');
    
});