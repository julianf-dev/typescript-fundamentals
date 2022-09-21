import _ from 'lodash';


const data = [
  {
    username: 'julian',
    role: 'admin'
  },
  {
    username: 'david',
    role: 'seller'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'Alejandra',
    role: 'customer'
  },

]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)

