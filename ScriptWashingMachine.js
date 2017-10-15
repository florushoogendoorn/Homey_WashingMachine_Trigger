let wasmachine = false;
let timeUnit = ["second", "minute", "hour"];
let timeFactor = [1, 60, 3600, 3600];
let z = 0;

let devices = await Homey.devices.getDevices();
let flows = await Homey.flow.getFlows();

Object.values(flows).forEach(flow => {
    if(flow.title === 'Wasmachine') {
        let x = parseInt(flow.trigger.args.n);
        switch (flow.trigger.args.type) {
            case timeUnit[0]:
                z = timeFactor[0] * x;
                break;
            case timeUnit[1]:
                z = timeFactor[1] * x;
                break;
            case timeUnit[2]:
                z = timeFactor[2] * x;
                break;
            default:
                z = timeFactor[3] * x;
        }
    }
});

Object.values(devices).forEach(device => {

    if(device.class === 'socket' && device.name === 'Wasmachine') {

        let powerLastUpdate = device.lastUpdated.measure_power;
        let dateUpd = new Date(powerLastUpdate);
        let dateNow = new Date();
        let noChange = parseInt((dateNow.getTime() - dateUpd.getTime())/1000);

        // console.log('Last power change :', device.lastUpdated.measure_power, '('+noChange+' seconds)');            

        if(device.state.measure_power === 0 && noChange > z && noChange < (z * 1.5)) {
            wasmachine = true;
        }
    }
});
return wasmachine;
