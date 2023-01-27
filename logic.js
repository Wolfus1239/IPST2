import { print } from './utils/print.js'
const main = () => {
    let result = 0
    let all = ''
    let mas = []
    return (state) => {
        if(state == 'АС'){
            all = ''
            state =  ''
            mas = []
        }
        if(state == 'С'){
            all = all.slice(0, -1)
            state=''
        }
        if(state == '+'){
            mas.push(all)
            console.log(mas)
            state = ''
            all = ''
            const dbles = mas.map((num) => Number(num));
            result = dbles.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);
            console.log(result);
            all = result
            
        }
            all += state
            print(all)
        
    }
}

export default main