const routes = {
    prefixes: [
        'redditech://app',
    ],
    config : {screens : {
        Landing : 'Landing',
        Home : 'Home',
        Settings : 'Settings'
    }},
    state : {
        routes: [
            {
                name : 'Landing'
            },{
                name : 'Home'
            },{
                name : 'Settings'
            }
        ]
    }
}

export {routes};