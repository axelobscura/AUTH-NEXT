import Link from 'next/link';

console.log('process: ' + JSON.stringify(process.env));
console.log('process: ' + process.BACKEND_URL);

export default () => (
  <div>Hello World. <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
)
