import puppeteer from 'puppeteer-core';
const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
// args: storyPrefix outDir count   (id = `${prefix}слайдXX`)
const [,,prefix,outDir,countS]=process.argv; const count=+countS;
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox','--force-color-profile=srgb']});
const p=await b.newPage();
await p.setViewport({width:1920,height:1080,deviceScaleFactor:1});
for(let i=1;i<=count;i++){
  const nn=String(i).padStart(2,'0');
  const url=`http://localhost:6006/iframe.html?id=${encodeURIComponent(prefix+nn)}&viewMode=story`;
  const r=await p.goto(url,{waitUntil:'networkidle0',timeout:60000});
  await p.evaluate(async()=>{if(document.fonts)await document.fonts.ready;});
  await new Promise(r=>setTimeout(r,400));
  await p.screenshot({path:`${outDir}/slide-${nn}.png`,clip:{x:0,y:0,width:1920,height:1080}});
}
await b.close();console.log('done',prefix,count);
