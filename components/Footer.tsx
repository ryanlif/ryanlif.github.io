import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';


const Footer = (): JSX.Element => {
    const iconStyle = "hover:bg-gray-300 dark:hover:bg-gray-600 p-1 rounded-md";

    return (
        <footer>
            <div className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-between text-sm opacity-60 m-auto pt-20 pr-5">
                <p> &copy; {new Date().getFullYear()}. {personalInfo.copyright}</p>
                {/* On wider screens these links sit under the contact info in About; keep them here for phones, where that column is hidden. */}
                <div className="md:hidden">
                    <SupportingBox></SupportingBox>
                </div>
            </div>
            
            <p className="text-center text-sm opacity-40 dark:opacity-50 pb-4 pt-4">
                Built with <i>Next.js, TailwindCSS</i> and <a href = {personalInfo.love}>💛</a>
                . {' '}
            </p>
        </footer>
    );
};

export default Footer;
