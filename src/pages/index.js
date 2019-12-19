import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
 id: '453402a7-769a-4ed1-8767-f223bd41aa04',
 src: 'https://drscdn.500px.org/photo/165014925/q%3D80_m%3D1000_k%3D1/v2?sig=e78f1f925b02bc9cc81042dc667844f40ee3d6eb80165b6941fce64346f10f19',
 thumbnail: 'https://drscdn.500px.org/photo/165014925/q%3D80_m%3D1000_k%3D1/v2?sig=e78f1f925b02bc9cc81042dc667844f40ee3d6eb80165b6941fce64346f10f19',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'ce05bda2-e14a-4918-ab1f-1bfe11b4cd05',
 src: 'https://drscdn.500px.org/photo/189659807/q%3D80_m%3D2000/v2?sig=fb85f0045185682cf9b096f8b3d7bf919733f87330f68ece801489d4879000c5',
 thumbnail: 'https://drscdn.500px.org/photo/189659807/q%3D80_m%3D2000/v2?sig=fb85f0045185682cf9b096f8b3d7bf919733f87330f68ece801489d4879000c5',
 title: '',
 desc: '',
 tags: [ 'osa', 'all', 'macro' ]
}, 
{
 id: 'bae19aec-6ba4-47ca-b803-ac4711a50194',
 src: 'https://drscdn.500px.org/photo/201383383/q%3D80_m%3D1000/v2?sig=5a72307c75f28e373ece3259f28289ba40fa215751bb5c56ab38337b258ec259',
 thumbnail: 'https://drscdn.500px.org/photo/201383383/q%3D80_m%3D1000/v2?sig=5a72307c75f28e373ece3259f28289ba40fa215751bb5c56ab38337b258ec259',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'd8699708-1458-4a42-bfbf-006fc6cb92be',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/a76e7e837ab0d241872b5ac0f5eb9060/5E19959F/t51.2885-15/e35/18809331_276567986149251_7591878058919854080_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=103',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/a76e7e837ab0d241872b5ac0f5eb9060/5E19959F/t51.2885-15/e35/18809331_276567986149251_7591878058919854080_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=103',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'cfc58c89-818f-495e-b17a-6fd9228e8a9b',
 src: 'https://drscdn.500px.org/photo/181476059/q%3D80_m%3D1000_k%3D1/v2?sig=824d90663b0abe6a33afd6cc034ad4ea5fe2cc565ef4df0b76102bd56f8d75cc',
 thumbnail: 'https://drscdn.500px.org/photo/181476059/q%3D80_m%3D1000_k%3D1/v2?sig=824d90663b0abe6a33afd6cc034ad4ea5fe2cc565ef4df0b76102bd56f8d75cc',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '2d999cc0-a07d-4390-a1f5-472bd5a3c535',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/d7cb80dcfa3691fdafa951297db28e1b/5E01C519/t51.2885-15/e35/18879011_1907559926128715_6354052652963201024_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=111',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/d7cb80dcfa3691fdafa951297db28e1b/5E01C519/t51.2885-15/e35/18879011_1907559926128715_6354052652963201024_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=111',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '31b62370-bf11-4aab-91f5-534a32b799a4',
 src: 'https://drscdn.500px.org/photo/207728747/q%3D80_m%3D1500/v2?sig=4742af28c31b1488cdaa979570ad55d870f668cecc4388d12a7fc9f096f8adb1',
 thumbnail: 'https://drscdn.500px.org/photo/207728747/q%3D80_m%3D1500/v2?sig=4742af28c31b1488cdaa979570ad55d870f668cecc4388d12a7fc9f096f8adb1',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '72673fe7-2fbd-46c0-bc7f-a4a4dd4ddd6c',
 src: 'https://drscdn.500px.org/photo/186175805/q%3D80_m%3D1000/v2?sig=5075e5b6d78216c72f1b8c344f5e589f67b493a2f13b26864f1ae3d4193d21b7',
 thumbnail: 'https://drscdn.500px.org/photo/186175805/q%3D80_m%3D1000/v2?sig=5075e5b6d78216c72f1b8c344f5e589f67b493a2f13b26864f1ae3d4193d21b7',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'fa22b007-78af-4a9b-a840-2d496be39a62',
 src: 'https://drscdn.500px.org/photo/185851835/q%3D80_m%3D1000/v2?sig=d1d23296ec32159fac0986af810d0c4cc7ad815e5e03761225f942a8b4e2785e',
 thumbnail: 'https://drscdn.500px.org/photo/185851835/q%3D80_m%3D1000/v2?sig=d1d23296ec32159fac0986af810d0c4cc7ad815e5e03761225f942a8b4e2785e',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '80e962d1-bdf1-4bf0-8a47-f0b2633ab101',
 src: 'https://drscdn.500px.org/photo/159875643/q%3D80_m%3D1000_k%3D1/v2?sig=783b9591e720a0cdf6c1d825569f3a1747da39ffab0d8c0b7383852bb3beca6d',
 thumbnail: 'https://drscdn.500px.org/photo/159875643/q%3D80_m%3D1000_k%3D1/v2?sig=783b9591e720a0cdf6c1d825569f3a1747da39ffab0d8c0b7383852bb3beca6d',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '8e93dd19-2461-498b-908c-4cc20bc001c5',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/d3822ec37d140c3b3094b5e909a15bc1/5E3DED40/t51.2885-15/e35/18722611_1842271349432618_4125235024595255296_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=102',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/d3822ec37d140c3b3094b5e909a15bc1/5E3DED40/t51.2885-15/e35/18722611_1842271349432618_4125235024595255296_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=102',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '26213cae-89dd-4237-94f9-445276fa37a1',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/749a95cf1cf867ccfd8b27adf3ea70a5/5E04CE3F/t51.2885-15/e35/18723762_338816776537697_7501003938280243200_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=105',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/749a95cf1cf867ccfd8b27adf3ea70a5/5E04CE3F/t51.2885-15/e35/18723762_338816776537697_7501003938280243200_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=105',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '9cea2dc4-6ea0-4464-a6cf-a31bfbc71256',
 src: 'https://drscdn.500px.org/photo/159408757/q%3D80_m%3D1000/v2?sig=d78c1d7ddb1c2c3fb1c55714ea8869ae1fc421fbf580525b601a880e1c0cdaad',
 thumbnail: 'https://drscdn.500px.org/photo/159408757/q%3D80_m%3D1000/v2?sig=d78c1d7ddb1c2c3fb1c55714ea8869ae1fc421fbf580525b601a880e1c0cdaad',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'd179a4f3-0726-4a62-a0b5-48072d6804e1',
 src: 'https://drscdn.500px.org/photo/155998743/q%3D80_m%3D1000_k%3D1/v2?sig=6dcbfc035bd2d2f9d71bbfef602a3047e5b1275d31e9aa4d5264c3972d5026d6',
 thumbnail: 'https://drscdn.500px.org/photo/155998743/q%3D80_m%3D1000_k%3D1/v2?sig=6dcbfc035bd2d2f9d71bbfef602a3047e5b1275d31e9aa4d5264c3972d5026d6',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '8074aa2c-0703-44c0-a367-30d30227fce4',
 src: 'https://drscdn.500px.org/photo/208080785/q%3D80_m%3D1000_k%3D1/v2?sig=5fa799b1217534fa1728a17061b08e51c8163186baf11226df28f88a66361c32',
 thumbnail: 'https://drscdn.500px.org/photo/208080785/q%3D80_m%3D1000_k%3D1/v2?sig=5fa799b1217534fa1728a17061b08e51c8163186baf11226df28f88a66361c32',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'd3a0064d-8656-47fa-a4b5-b2265fcf9f15',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/5ba9fa4fab145d79ad4fde7d3f1c047d/5DFE89C9/t51.2885-15/e35/18888689_549235342133245_5574588269959577600_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/5ba9fa4fab145d79ad4fde7d3f1c047d/5DFE89C9/t51.2885-15/e35/18888689_549235342133245_5574588269959577600_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '4bd4fe70-e9d0-4b25-b08e-fcfcc36ff933',
 src: 'https://drscdn.500px.org/photo/186399939/q%3D80_m%3D1000/v2?sig=274ec75a718e1ca2d74826f7450c33638c5ef90814f78632d04a7bccb7e6e21c',
 thumbnail: 'https://drscdn.500px.org/photo/186399939/q%3D80_m%3D1000/v2?sig=274ec75a718e1ca2d74826f7450c33638c5ef90814f78632d04a7bccb7e6e21c',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '6a21f0d7-dc50-479d-a98f-eb1016f8fcbd',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/24863f6280eb460cd34a6a4877c8b26c/5E09F20D/t51.2885-15/e35/18723676_813062498850582_927721444266213376_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/24863f6280eb460cd34a6a4877c8b26c/5E09F20D/t51.2885-15/e35/18723676_813062498850582_927721444266213376_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'ec310f46-2fca-4a02-9be0-9b892cc29dd1',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/68746d8c805d9c6c4d5ca0837776bb73/5E06F9B2/t51.2885-15/e35/18879511_1150592345046840_1802026835538608128_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=100',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/68746d8c805d9c6c4d5ca0837776bb73/5E06F9B2/t51.2885-15/e35/18879511_1150592345046840_1802026835538608128_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=100',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: 'be502f42-2c86-455c-a93c-9eae66970911',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/ae48c60146c8809a4baa1102d35bb6b5/5E101DEF/t51.2885-15/e35/18809447_443229529372566_2433254167532273664_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/ae48c60146c8809a4baa1102d35bb6b5/5E101DEF/t51.2885-15/e35/18809447_443229529372566_2433254167532273664_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}, 
{
 id: '10beffd6-86f5-4e43-98dc-0d57aa0fdb65',
 src: 'https://scontent-cdt1-1.cdninstagram.com/vp/e059a000509361cf87c5c7628332a607/5E053491/t51.2885-15/e35/18723244_1435790143146193_2379822553871941632_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101',
 thumbnail: 'https://scontent-cdt1-1.cdninstagram.com/vp/e059a000509361cf87c5c7628332a607/5E053491/t51.2885-15/e35/18723244_1435790143146193_2379822553871941632_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101',
 title: '',
 desc: '',
 tags: [ 'osa', 'all' ]
}

];

/**
 * @summary searches a query for parameters
 * @param {*} key: string
 * @example Given a current url 'http://localhost:8000/?category=all':
 * getQueryVariable('category') => 'all'
 */
function getQueryVariable(key)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    if (pair[0] == key) {
      return pair[1];
    }
  }
  
  return undefined;
}

const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} category={getQueryVariable('category')}/>
  </Layout>
);

export default IndexPage;
