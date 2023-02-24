import EachCertification from "./EachCertifications";
import './css/CertificationsHero.css';
import '../DesktopGrid.css';

function CertificationsHero() {
    return (
        <div className="certificationsHero">
            <h1>Certifications</h1>
            <EachCertification 
                link="https://www.coursera.org/account/accomplishments/specialization/certificate/89E6K73V73UA" 
                institution="Meta & Coursera" 
                course="Front End Developer" 
            />
            <EachCertification
                link="https://opensea.io/assets/matic/0xdbf2138593aec61d55d86e80b8ed86d7b9ba51f5/1449"
                institution="Encode Club"
                course="Solidity Developer"
            />
            <EachCertification
                link="https://certificates.cs50.io/24a6ed01-6281-49a9-b5ee-09341f9a45c4.pdf?size=letter"
                institution="Harvard"
                course="CS50's Web Programming with Python and JavaScript"
            />
            <EachCertification
                link="https://certificates.cs50.io/5fa45b4a-06e2-4fe8-8c83-a380ba6b0615.pdf?size=letter"
                institution="Harvard"
                course="CS50’s Introduction to Computer Science"
            />
            <EachCertification
                link="https://media.licdn.com/dms/image/C562DAQH5e56Qn6Nsjg/profile-treasury-image-shrink_800_800/0/1616001398062?e=1677848400&v=beta&t=0GDWKlcHfT-EsRt9PuLODRG_HmyYmM-O8iWMP8UE5K4"
                institution="Blockchain Training Alliance"
                course="Blockchain Foundations"
            />
            <EachCertification
                link="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=84c8fa6f1b&attid=0.1&permmsgid=msg-f:1750508885645188984&th=184b0e8e910bdf78&view=att&disp=inline&realattid=f_lax0i1od3&saddbat=ANGjdJ8khzbSqfxWWJCv7QdLHuwv7QGj_QquEHE5H-OTj3mUcRwKSpXdWlrNxqmJvwivURqxZ90cRaihTVpzGbsAAZ4gcdGIm50NO8NpgVLEVc4WLA_-nsC9peN-jHcyKx10m7G0C0m-yI9G5yhEq3M4mQN0-rH2D0L9klNw0FeSygWZbokD7FqJypN1seGD9TZM2Wu-fku-OODNdYvvHFSuoyVlL5jkL3ihbR65HE1ovV9fRSPMyoQ3h3Wo6H__jNkX9Cp90WR8Sf5pKiPMa4UC5R4Ayus0o8GMcvmJd5KAAnbYiWW03piXx6cl-_Lw6l1zNkPpbxo-zlb2HNiVAZesoRU2z4HiWAZ4YhxM_PRKQq6mvBYukv6XLoQC29bo_XWS-Hg8vIePs1OQ5MVL_rDYM0wqGBhgyjw-LLF1l0WfYaEzRYMeXiDqA4ZQM0K84z3o0I3bq0En5wirv8yWG8t2FKBYfYNEx_7v_DW85Cl5uaVms87lsRzSUIaUFnHh1FKDq3gnSDDoYdUUn85YUpfLb2s7aH5RiwSr9pR6wkuWz5_pi9-4px4buiJstXGLzP4NHZGAPCYNaIZW16jmaPX0xa_xxBBMUhxOaf9ms8EXgZ8cUrxq2cgR8WY8dvPuJ1VvuK2ybuAtUFCDyrVSuj6Q9onI6j2NHPXuE1YTNVWF7Ydr7idkvOzYmxyRCLil80yr8vjVU5JFSOnsYInUXnvn_vtG9KHngzF0CKYa9D-8IYRAEJRKq3hfqNFzp6xJY6fYitndVdbnU71CQ6Ujo_zjPLYRLBUJzrhNgKczJ1gjt2D3xfAtWa8ij--qrvMh5UHGmU2XLtAkFuP4PDAtG58LSbjpvDX1KXr560J5oV-oNIFCo5dxGZE2MjXNe5A6yY-ul60rRogHoJNzpeozTC7_z0HlwTda6dFx2mIqPAJNb76gVHHOZCTKOBtZG_EDPKkgtFH7KH6RWjouSX8jQ8qm0qykyEOjcsMNk_NADpV4-w8UpXMCoXXccGigyKpdfcw2u_5LPWtLMDMdRmzJlhXJX54LFf8H0bZItKDPoUNfFrrSmZ2x43tzOZ3cMbEpnItokmrnNkmzvaKGx4u6B0JhmaTseHwezwf9YjvG-Ihb7N1kvt6fJZ0UaCyxzx4NlnufeTSJNx2QFzw80FKs__VHhPUIJvTJi9vi_rgFNSkrpZ1tNeZG7r7H19NFuIAiY28lVe_dYDvGu-oYJyS9"
                institution="Universidad San Ignacio de Loyola"
                course="Bachelor in Business Administration"
            />
        </div>
    )
}

export default CertificationsHero;