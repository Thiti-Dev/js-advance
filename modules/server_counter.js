var players_online = 0 // default num of player after every server restart

function get_total_players_online(){
    return players_online
}

function increase_number_of_online_player(){
    players_online++    
}

module.exports = {
    get_total_players_online,
    increase_number_of_online_player
}