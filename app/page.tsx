import CompareLogo from '@/app/ui/Compare-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
            <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <CompareLogo /> 
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Best Makeup Remover Balms: A Simple Review</strong> <p/>
            Removing makeup properly is essential for healthy skin. Today, I’m testing a few popular makeup remover balms to compare their effectiveness, texture, and gentleness on the skin.  {' '}
            Product1:
            <a href="https://item.taobao.com/item.htm?abbucket=10&id=955221620284&ltk2=1753454156416hvire7xqz36fcttgbqpek9&ns=1&priceTId=213e07d217534541503096657e1951&skuId=5877454541242&spm=a21n57.1.hoverItem.3&utparam=%7B%22aplus_abtest%22%3A%229a119003d291ab2e10ce9d5b06a005b2%22%7D&xxc=taobaoSearch" className="text-blue-500">
            
            <p> Clinique Take The Day Off Cleansing Balm </p>
            
            </a>
            Product2:
            {""}
            <a href="https://item.taobao.com/item.htm?id=684355492652&ns=1&abbucket=10&xxc=taobaoSearch&skuId=null&priceTId=214784cb17534543942515295e114b&utparam=%7B%22aplus_abtest%22%3A%22b0c0566f10849c87ecf8f2c76200379b%22%7D&spm=a21n57.1.hoverItem.2&ltk2=1753454399409uygzz9wn4v9wxobxdq72" className="text-blue-500">
             <p>Banila Co Clean It Zero</p>
             </a>

             Product3:
            {""}
            <a href="https://item.taobao.com/item.htm?abbucket=10&id=39446183766&ltk2=175361903939339u279emwflg6fxlt69pm7&ns=1&priceTId=2147804d17536189965528078e1a89&skuId=5865135413648&spm=a21n57.1.hoverItem.3&utparam=%7B%22aplus_abtest%22%3A%226b6c8be50c742f55ff0bb8d0504c9fbd%22%7D&xxc=taobaoSearch"className="text-blue-500">
             <p>The Body Shop</p>
             </a>
             1. Effectiveness:  
Clinique Take The Day Off Cleansing Balm: Melts makeup effortlessly, even waterproof mascara.  
Banila Co Clean It Zero: Works well but leaves a slight residue.  
The Body Shop Camomile Cleansing Butter: Good for light makeup but struggles with heavy eyeliner.  <p/>

2. Texture & Application:  
Clinique: Smooth, lightweight, and turns into an oil quickly.  
Banila Co: Slightly thicker but still easy to spread.  
The Body Shop: Creamier, requires more rubbing to dissolve makeup.  <p/>

3. Skin Sensitivity  
Clinique: Best for sensitive skin—no irritation.  
Banila Co: Contains fragrance, which may irritate some skin types.  
The Body Shop: Gentle but can feel heavy if not rinsed well.  <p/>

Final Verdict  
If you want a gentle, effective option, Clinique is the winner. For a budget-friendly choice, Banila Co works well (unless you have sensitive skin). The Body Shop is decent for light makeup but not the strongest.  

Have you tried any of these? Share your thoughts below!  

Skincare MakeupRemover CleansingBalm BeautyReview<p/>

---  <p/>
Would you like me to add more details or include other brands? 
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>bought</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
                <Image
        src="/哈哈.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />   <Image
        src="/哈哈.png"
         width={560}
        height={620}
      className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
      </div>
    </main>
  );
}
