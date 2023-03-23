let isLive = true;

let prod = {
    apiKey: '543bd604775c751180b1c9722a1db386',
    isLive: isLive
}

let dev = {
    apiKey: '543bd604775c751180b1c9722a1db386',
    isLive: !isLive
}

export {isLive, prod, dev};