var userObj = {
    username: 'aaw0kenn',
    password: 'Iwonttellunowornever',
    level: 5
}

//
// ─── ADMIN UTIL ─────────────────────────────────────────────────────────────────
//
function investigateUser(seed,rand_num){
    let gen_seed = seed + rand_num*rand_num*rand_num
    console.debug('[SEED RESULT]: ' + gen_seed)
    console.log(`The target username is ${this.username}\nand the password:${this.password} with level ${this.level}`)
}

investigateUser.apply(userObj, [5,6663325])