function Theory(){
    return(
        <div className="bg-red-300 h-screen justify-center items-center">

        <h1 className="text-blue-700 font-bold text-4xl">Rendering</h1>
        <p className="space-y-2 text-2xl text-white justify-center"> Rendering refers to the process of generating HTML to display content on a web page. In web development, rendering can happen on the server, the client (browser), or both, and each type of rendering has different advantages and drawbacks.</p>
        
        <h2 className="text-blue-700 font-bold text-3xl">Client-Side Rendering (CSR)</h2>
        <p className="space-y-2 text-2xl text-white justify-center" > Client-Side Rendering (CSR) is when the browser handles rendering the content after receiving a minimal HTML file and a JavaScript bundle from the server. The browser downloads and runs the JavaScript to fetch data and render the full page. CSR provides fast interactivity after the initial load, but the initial load time can be slow since the page doesn't display content until the JavaScript is fully processed. This method is great for dynamic applications but can pose SEO challenges because the content isn't immediately visible to search engine crawlers.</p>
        
        <h2 className="text-blue-700 font-bold text-3xl">Server-Side Rendering (SSR)</h2>
        <p className="space-y-2 text-2xl text-white justify-center"> Server-Side Rendering (SSR) generates the full HTML for a page on the server and sends it to the browser, allowing users to see content immediately upon loading the page. It improves initial load times and enhances SEO since search engines can easily crawl the fully rendered HTML. However, SSR can increase server load, as every request requires the server to process and generate HTML, and interactive elements may take longer to become usable since the JavaScript still needs to load after the HTML is rendered.</p>
        
        <h2 className="text-blue-700 font-bold text-3xl">Static Site Generation (SSG)</h2>
        <p className="space-y-2 text-2xl text-white justify-center" >Static Site Generation (SSG) pre-renders HTML files at build time, creating static pages that are served to users. This approach results in very fast load times and excellent scalability since the content is pre-built and served as static files. It's great for SEO because the fully rendered HTML is available to search engines. However, SSG is limited to static content, and updates require rebuilding the site, making it less suitable for frequently changing or dynamic data.</p>
       
        <h2 className="text-blue-700 font-bold text-3xl">Dynamic Rendering</h2>  
        <p className="space-y-2 text-2xl text-white justify-center">Dynamic rendering is a hybrid approach where the server switches between client-side rendering and server-side rendering based on the type of user agent (e.g., browser or search engine bot).It benfits for CSR,SSR but adds complexity in managing different rendering paths.</p>
       
        </div>
    );
}
export default Theory;