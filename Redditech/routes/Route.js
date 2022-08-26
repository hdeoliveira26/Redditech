const routes = {
    prefixes: [
        'reditech://app',
    ],
    config : {screens : {
        Landing : 'landing',
        Home : 'home',
        Settings : 'settings'
    }},
    state : {
        routes: [
            {
                name : 'landing'
            },{
                name : 'home'
            },{
                name : 'settings'
            }
        ]
    }
}

export {routes};