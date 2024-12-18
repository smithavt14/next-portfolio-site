import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MountainMobile = () => {
    const mobileSunRef = useRef(null)

    useEffect(() => {
        gsap.to(mobileSunRef.current, {
            y: 150,
            duration: 20,
            repeat: -1,
            ease: "none",
            yoyo: true,
            repeatDelay: 0
        });
    }, []);

    return (
        <svg viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g ref={mobileSunRef} transform="translate(0, -100)" >
                <g filter="url(#filter0_f_111_3455)">
                    <ellipse cx="136.465" cy="604.98" rx="89.4646" ry="78.9805" fill="#F0B86E" />
                </g>
                <g filter="url(#filter1_f_111_3455)">
                    <ellipse cx="135.163" cy="603.832" rx="64.0892" ry="56.5788" fill="#FFF1D7" />
                </g>
            </g>
            <path d="M109.173 636.114C103.571 630.913 96.2218 623.463 88.5132 622.235C70.7601 619.407 20.4154 657.374 4.78619 666.253C-1.62261 669.891 212.772 677.4 205.014 675.818C189.848 672.726 174.45 655.21 162.774 645.571C128.748 617.481 30.2936 535 30.2936 535C30.2936 535 -107.393 621.798 -129.484 636.65C-134.758 640.193 -201.723 676.382 -206.979 679.951C-230.133 697.229 -165.937 705.527 -161.697 737.468H-161.691C-160.645 745.342 -159.498 752.669 -158.597 758.959C-160.495 801.164 210.015 750.722 205.013 727.419C204.384 724.487 117.507 643.85 109.173 636.114Z" fill="#6E286E" />
            <path d="M253.866 714.253C246.262 705.186 174.868 654.307 163.189 644.692C129.148 616.671 30.2935 535 30.2935 535L29.65 544.331L15.4921 558.811L37.3725 575.221C37.3725 575.221 33.9272 589.354 22.8928 603.859C16.1676 612.699 47.3474 639.576 47.3474 639.576L-1.88357 672.396C-1.88357 672.396 25.375 711.652 24.8234 715.514C24.2718 719.375 5.1954 745.438 5.1954 745.438C5.1954 745.438 8.6206 746.912 41.5555 752.517C60.6554 755.767 135.542 753.566 154.497 757.987C183.916 764.848 182.817 735.454 212.569 734.994C226.523 734.777 290.575 745.616 295.866 722.926C297.078 717.727 256.617 717.531 253.866 714.253Z" fill="#B34F7F" />
            <path d="M615.152 751.068L545.213 658.696C545.213 658.696 473.835 572.023 461.498 558.846C425.549 520.448 358.13 448 358.13 448C358.13 448 159.299 596.431 135.959 616.733C141.511 611.855 130.387 621.577 135.959 616.733C111.495 640.352 -29.5125 710.307 -25.0323 753.971C-25.9842 745.373 -23.9282 764.735 -25.0323 753.971C-26.4061 793.496 615.152 751.068 615.152 751.068Z" fill="#8B0152" />
            <path d="M452 767.5C452 767.5 473.525 571.551 461.202 558.406C425.286 520.102 383.346 474.392 383.346 474.392L358.273 448L371.469 495.945L331.881 511.341L388.624 554.448L338.479 611.63L371.469 649.5L310.5 762.5L452 767.5Z" fill="#C8588E" />
            <path d="M381.5 836.762H115.542C115.542 836.762 156.731 778.182 197.018 764.796C226.5 755 407 760 407 760L381.5 836.762Z" fill="#BB3976" />
            <path d="M-26 748.5C-14.5001 731 406.5 783.5 406.5 783.5C406.5 783.5 430.442 850.765 398.5 850C366.558 849.235 16.2186 872.265 -6.00004 850C-21.7181 834.251 -48.1868 782.263 -26 748.5Z" fill="#972E6F" />
            <defs>
                <filter id="filter0_f_111_3455" x="5" y="484" width="262.929" height="241.961" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_111_3455" />
                </filter>
                <filter id="filter1_f_111_3455" x="60.074" y="536.253" width="150.178" height="135.157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_111_3455" />
                </filter>
            </defs>
        </svg>
    )
}

export default MountainMobile