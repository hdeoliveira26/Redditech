const routes = {
    prefixes: [
        'reditech://app',
    ],
    config : {screens : {
        Landing : 'landing',
        Home : 'home',
        Settings : 'settings',
        SubredditPage: 'subRedditPage'

    }},
    state : {
        routes: [
            {
                name : 'landing'
            },{
                name : 'home'
            },{
                name : 'settings'
            },{
                name: 'subRedditPage'
            }
        ]
    }
}

export {routes};