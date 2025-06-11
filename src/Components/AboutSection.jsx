import { Briefcase, Code, User } from "lucide-react"
import cvpdf from "../assets/Resume.pdf"

export const AboutSection = () => {
    var pdfUrl = "../assets/FinalResume.pdf";

    // Function to trigger the download
    function downloadPdf() {
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                // Create a blob URL for the PDF data
                var url = window.URL.createObjectURL(blob);

                // Create a link element to trigger the download
                var a = document.createElement("a");
                a.href = url;
                a.download = "AyushSachdev_7276725750.pdf"; // Set the desired file name
                document.body.appendChild(a);

                // Trigger a click event on the link element to initiate the download
                a.click();

                // Clean up by revoking the blob URL and removing the link element
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error("Failed to download the PDF file: ", error);
            });
    }


    function download_file() {
        const fileURL = "../assets/FinalResume.pdf"
        const fileName = "Ayush Sachdev_7276725750.pdf"
// for non-IE
if (!window.ActiveXObject) {
    var save = document.createElement('a');
    save.href = fileURL;
    save.target = '_blank';
    var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
    save.download = fileName || filename;
       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
            document.location = save.href; 
// window event not working here
        }else{
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }   
}

// for IE < 11
else if ( !! window.ActiveXObject && document.execCommand)     {
    var _window = window.open(fileURL, '_blank');
    _window.document.close();
    _window.document.execCommand('SaveAs', true, fileName || fileURL)
    _window.close();
}
}

    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Tech Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                        I’m a web developer driven by creativity and a constant desire to learn. 
                        {/* I craft engaging digital experiences, blending clean code with intuitive design to bring ideas to life on the web.  */}
                        I build with curiosity, design with purpose, and code with care.
                        </p>

                        <p className="text-muted-foreground">
                        I’m passionate about transforming complex problems into elegant, user-friendly solutions.
                        With a constant drive to learn and experiment, I stay on the cutting edge of web technologies,crafting experiences that are not only functional, but memorable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <button
                            onClick={download_file}
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}