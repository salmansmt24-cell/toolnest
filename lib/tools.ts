export type Category = 'image' | 'pdf' | 'text' | 'developer' | 'seo';
export type Tool = { slug: string; name: string; category: Category; description: string; keywords: string[] };
export const categories: {slug:Category;name:string;description:string}[] = [
 {slug:'image',name:'Image Tools',description:'Resize, compress and convert images in your browser.'},
 {slug:'pdf',name:'PDF Tools',description:'Merge, split and create PDF documents.'},
 {slug:'text',name:'Text Tools',description:'Clean, count and transform text.'},
 {slug:'developer',name:'Developer Tools',description:'Format and encode development data.'},
 {slug:'seo',name:'SEO Tools',description:'Prepare search previews and crawler directives.'}
];
export const tools: Tool[] = [
 ['image-compressor','Image Compressor','image','Compress images with adjustable JPEG/WebP quality.'],
 ['image-resizer','Image Resizer','image','Resize images to custom dimensions.'],
 ['jpg-to-png','JPG to PNG','image','Convert JPG images to PNG.'],
 ['png-to-webp','PNG to WebP','image','Convert PNG images to WebP.'],
 ['merge-pdf','Merge PDF','pdf','Combine PDF files into one document.'],
 ['split-pdf','Split PDF','pdf','Extract a selection of pages into a PDF.'],
 ['image-to-pdf','Image to PDF','pdf','Create a PDF from JPG or PNG images.'],
 ['word-counter','Word Counter','text','Count words, characters and sentences.'],
 ['case-converter','Case Converter','text','Convert text between letter cases.'],
 ['remove-duplicate-lines','Remove Duplicate Lines','text','Remove repeated lines while preserving order.'],
 ['json-formatter','JSON Formatter','developer','Validate, format or minify JSON.'],
 ['base64-encoder-decoder','Base64 Encoder / Decoder','developer','Encode and decode Unicode text with Base64.'],
 ['css-minifier','CSS Minifier','developer','Remove safe whitespace and CSS comments.'],
 ['meta-tag-preview','Meta Tag Preview','seo','Preview a title and description for search.'],
 ['robots-txt-generator','Robots.txt Generator','seo','Generate basic crawler rules.']
].map(([slug,name,category,description])=>({slug,name,category:category as Category,description,keywords:[name.toLowerCase(),'free online tool']}));
export const getTool = (slug:string) => tools.find(t=>t.slug===slug);
