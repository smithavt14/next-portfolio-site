'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MoonBackgroundSvg = () => {
    const moonRef = useRef(null);

    useEffect(() => {
        // Import and register the plugin only on the client side
        if (typeof window !== 'undefined') {
            const { MotionPathPlugin } = require('gsap/MotionPathPlugin');
            gsap.registerPlugin(MotionPathPlugin);
        }

        if (!moonRef.current) return;

        const timeline = gsap.timeline();

        try {
            timeline.to(moonRef.current, {
                duration: 60,
                motionPath: {
                    path: "#gravity",
                    align: "#gravity",
                    autoRotate: true,
                    alignOrigin: [0.0, 0.0],
                    start: 1.4,
                    end: 0.4
                },
                ease: "none",
                repeat: -1
            });
        } catch (error) {
            console.error('GSAP animation error:', error);
        }

        return () => timeline.kill();
    }, []);

    return (
        <svg viewBox="0 0 1280 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_24_67)">
                <path id="gravity" d="M1417.03 542.348C1400.18 581.902 1349.33 602.73 1280.43 604.208C1211.57 605.685 1124.88 587.826 1036.7 550.258C948.522 512.689 875.591 462.544 828.955 411.862C782.285 361.141 762.085 310.047 778.937 270.493C795.789 230.939 846.63 210.112 915.539 208.633C984.398 207.156 1071.08 225.015 1159.26 262.584C1247.44 300.152 1320.37 350.297 1367.01 400.98C1413.68 451.7 1433.88 502.795 1417.03 542.348Z" stroke="black" strokeOpacity="0.02" />
                <path d="M1315 504C1315 605.068 1233.07 687 1132 687C1030.93 687 949 605.068 949 504C949 402.932 1030.93 321 1132 321C1233.07 321 1315 402.932 1315 504Z" fill="#381956" />
                <path d="M1195.74 675.595C1100.39 669.286 1025 589.946 1025 493C1025 414.346 1074.62 347.282 1144.27 321.404C1239.61 327.714 1315 407.053 1315 504C1315 582.653 1265.38 649.717 1195.74 675.595Z" fill="#201240" />
                <path d="M1308.57 452.883C1256.39 457.324 1197.18 464.364 1134.69 474.068C1068.46 484.319 1006.59 496.279 953.387 508.58C845.135 533.662 772.557 560.452 770.92 578.698C770.852 579.245 770.852 579.792 770.988 580.338L771.193 581.159L771.807 581.569C772.011 581.706 772.216 581.842 772.421 581.911C772.625 581.979 772.83 582.184 773.103 582.321L773.444 582.525C773.58 582.594 773.785 582.73 773.921 582.799C774.058 582.868 774.262 583.004 774.467 583.072L775.013 583.346C775.558 583.619 776.241 583.892 776.855 584.165H776.923C778.218 584.712 779.651 585.191 781.22 585.669L781.902 585.874L782.652 586.079L783.403 586.284C783.676 586.353 783.88 586.421 784.153 586.489L784.903 586.695L785.653 586.9C786.745 587.173 787.837 587.446 788.996 587.651L789.815 587.856H789.883C790.565 587.993 791.316 588.13 792.066 588.266L792.543 588.335L793.635 588.54L795.681 588.881L795.953 588.949C796.977 589.087 798 589.292 799.092 589.428C800.32 589.633 801.547 589.77 802.843 589.975L804.071 590.111L805.299 590.248C807.413 590.522 809.596 590.727 811.847 590.932L814.166 591.136C849.977 594.212 903.865 592.981 968.803 587.583H968.939C968.598 586.968 968.325 586.284 967.984 585.669C967.779 585.327 967.643 584.986 967.439 584.644L967.098 583.961V583.756C966.073 581.692 965.118 579.595 964.233 577.468L961.572 577.673C939.063 579.587 919.622 580.817 904.07 581.227C896.021 581.432 889.063 581.432 883.265 581.227C879.036 581.09 875.489 580.749 872.556 580.338L871.805 580.202C866.416 579.382 863.415 578.084 863.142 576.375C863.074 575.554 863.415 574.735 864.029 574.188C869.964 567.49 904.479 557.034 956.798 545.279C1007 534.003 1073.64 521.565 1147.04 510.22C1210.07 500.447 1268.59 492.999 1316.34 488.283C1327.66 487.19 1338.37 486.164 1348.4 485.412V450.08C1335.65 450.764 1322.35 451.721 1308.57 452.883ZM1317.03 524.367C1316.82 527.647 1316.48 530.928 1316 534.14C1315.87 535.215 1315.72 536.286 1315.52 537.352L1315.32 538.719C1315.18 539.402 1315.12 540.086 1314.98 540.701C1321.05 539.334 1327.05 537.967 1332.99 536.601L1335.03 536.122L1336.54 535.78C1340.49 534.823 1344.44 533.935 1348.34 532.978V517.533C1338.58 519.72 1328.14 522.044 1317.03 524.367Z" fill="url(#paint0_linear_24_67)" />
                <path d="M1304.27 447.552C1252.08 451.994 1192.88 459.033 1130.4 468.737C1064.16 478.988 1002.29 490.88 949.089 503.25C838.244 528.946 764.712 556.42 766.622 574.666V575.008C766.963 577.263 768.532 579.314 771.123 581.159L771.738 581.569C771.942 581.706 772.147 581.842 772.352 581.911C772.556 581.979 772.761 582.184 773.033 582.321L773.375 582.526C773.511 582.594 773.716 582.73 773.852 582.799C773.988 582.868 774.193 583.004 774.398 583.073L774.943 583.346C775.489 583.619 776.171 583.892 776.786 584.166H776.853C778.15 584.713 779.582 585.191 781.151 585.669L781.833 585.874L782.583 586.079L783.333 586.284C783.607 586.353 783.811 586.421 784.084 586.49L784.834 586.695L785.585 586.9C786.676 587.173 787.767 587.446 788.927 587.652L789.813 587.925H789.882C790.564 588.061 791.315 588.198 792.065 588.335L792.542 588.403L793.633 588.608L795.68 588.949L795.953 589.018C796.976 589.154 798 589.36 799.091 589.497C800.318 589.701 801.546 589.838 802.842 590.043L804.07 590.18L805.298 590.317C807.412 590.59 809.595 590.795 811.846 591L814.166 591.205C849.977 594.28 903.864 593.05 968.802 587.652H968.938C968.597 587.036 968.324 586.353 967.983 585.738C967.779 585.396 967.642 585.054 967.438 584.713L967.096 584.029V583.824C966.072 581.76 965.117 579.664 964.232 577.537C963.463 575.8 962.735 574.046 962.049 572.274L961.913 572.001L959.252 572.206L955.705 572.548L953.386 572.753C950.111 573.026 946.906 573.3 943.768 573.505L939.198 573.846C930.535 574.461 922.486 575.008 915.051 575.35C905.569 575.828 897.111 576.033 889.881 576.101H883.196L881.627 576.033H880.672L878.626 575.965C877.671 575.897 876.716 575.897 875.829 575.828L875.147 575.76L874.465 575.692L873.169 575.623C871.872 575.487 870.645 575.418 869.485 575.281L868.599 575.145C867.712 575.008 866.894 574.94 866.143 574.735L865.665 574.666H865.529L864.984 574.53C864.642 574.461 864.301 574.393 864.029 574.325L863.278 574.119C863.074 574.052 862.801 573.983 862.596 573.914C862.391 573.846 862.119 573.778 861.914 573.71L861.436 573.505L861.027 573.3L860.617 573.095L860.277 572.89C860.14 572.821 860.004 572.753 859.867 572.616C859.799 572.548 859.731 572.548 859.662 572.479C859.594 572.411 859.526 572.343 859.458 572.274C859.39 572.206 859.322 572.138 859.254 572.069C859.185 572.001 859.117 571.933 859.117 571.865C859.117 571.865 859.049 571.796 859.049 571.728C858.981 571.591 858.912 571.522 858.912 571.386C858.912 571.318 858.912 571.249 858.844 571.249V571.113C858.504 569.063 862.05 566.465 868.871 563.458L869.349 563.253C884.015 556.898 913.278 548.765 952.568 539.949C1002.77 528.673 1069.42 516.235 1142.81 504.89C1205.84 495.117 1264.37 487.668 1312.11 482.953C1325.07 481.654 1337.21 480.561 1348.47 479.74V444.34C1334.35 445.16 1319.55 446.253 1304.27 447.552ZM1312.73 519.036C1312.39 523.41 1311.9 527.716 1311.23 532.022C1311.16 532.5 1311.09 532.91 1311.02 533.388C1310.88 534.071 1310.81 534.755 1310.68 535.37L1312.46 534.96L1314.5 534.482L1316 534.14C1327.12 531.612 1337.9 529.083 1348.34 526.554V511.177C1337.35 513.706 1325.41 516.371 1312.73 519.036Z" fill="url(#paint1_linear_24_67)" />
                <path d="M1348.13 460.4C1295.95 464.842 1236.74 471.881 1174.25 481.585C1108.02 491.836 1046.15 503.728 992.949 516.098C887.834 540.428 816.28 566.397 810.755 584.576V584.644C810.414 585.669 810.346 586.762 810.482 587.856V587.993C810.619 588.676 810.824 589.428 811.164 590.043C811.301 590.316 811.505 590.59 811.642 590.863L811.71 591L814.029 591.205C849.84 594.28 903.728 593.05 968.665 587.652C954.204 588.54 941.79 588.949 931.695 588.949C925.078 588.949 919.485 588.676 914.983 588.266C910.344 587.788 906.934 587.105 904.888 586.216C903.455 585.601 902.705 584.849 902.568 583.961C902.432 583.072 902.909 582.252 903.933 581.295C905.843 579.519 909.526 577.537 914.846 575.35C905.365 575.828 896.906 576.033 889.676 576.101H883.128L881.559 576.033H880.604L878.558 575.965C877.603 575.897 876.648 575.897 875.761 575.828L875.079 575.76L874.397 575.692L873.101 575.623C871.805 575.487 870.577 575.418 869.418 575.281L868.53 575.145C867.644 575.008 866.825 574.94 866.075 574.735L865.598 574.666H865.461L864.915 574.53C864.574 574.461 864.233 574.393 863.96 574.325L863.21 574.119L862.528 573.914C862.323 573.846 862.05 573.778 861.846 573.709L861.368 573.505L860.959 573.3L860.55 573.095L860.209 572.89C860.073 572.821 859.936 572.753 859.799 572.616C859.731 572.548 859.663 572.548 859.595 572.479L859.39 572.274L859.185 572.069C859.118 572.001 859.049 571.933 859.049 571.865C859.049 571.865 858.981 571.796 858.981 571.728C858.913 571.591 858.844 571.522 858.844 571.386C858.844 571.317 858.844 571.249 858.776 571.249V571.113C858.435 569.063 861.983 566.465 868.804 563.458L869.281 563.253C883.946 556.898 913.209 548.765 952.499 539.949C1002.7 528.673 1069.35 516.234 1142.74 504.89C1205.77 495.117 1264.3 487.668 1312.04 482.953C1325 481.654 1337.14 480.561 1348.4 479.74V460.4H1348.13Z" fill="#F97B45" />
                <path d="M1304.72 447.281C1320.48 445.913 1335.55 444.889 1349.88 444V491.566C1345.65 491.975 1341.35 492.386 1336.92 492.796C1289.17 497.511 1230.65 505.029 1167.62 514.733C1094.22 526.078 1027.58 538.584 977.374 549.792C932.491 559.907 900.704 568.996 888.835 575.625H896.406L899.476 575.557C904.799 575.405 910.12 575.199 915.438 574.942C929.08 574.258 944.837 573.096 962.299 571.593L969.5 587.387C969.5 587.387 946.709 589.06 935.56 589.772C929.08 590.182 922.805 590.592 916.665 590.866C875.329 592.984 840.541 593.052 814.962 590.866L812.301 590.66H812.029C811.256 590.595 810.482 590.527 809.71 590.455H809.505C804.525 589.909 799.887 589.362 795.726 588.61C794.839 588.474 793.884 588.269 792.997 588.132H792.588C790.948 587.803 789.311 587.462 787.677 587.106H787.541C785.512 586.667 783.508 586.12 781.538 585.466H781.47L780.72 585.193L780.515 585.125H780.446C779.491 584.783 778.537 584.442 777.65 584.099L777.513 584.031L776.49 583.621L776.353 583.552C775.808 583.348 775.331 583.074 774.853 582.869C774.648 582.801 774.512 582.664 774.307 582.596L774.239 582.664L773.421 582.255L773.216 582.117C773.011 581.981 772.738 581.844 772.534 581.708L772.397 581.639L772.33 581.571C772.056 581.434 771.783 581.229 771.579 581.093C770.193 580.182 769.009 578.996 768.1 577.607C767.562 576.808 767.213 575.896 767.077 574.942C764.28 556.695 838.017 529.017 949.544 503.252C1002.75 490.882 1064.62 478.991 1130.85 468.74C1193.33 458.83 1252.47 451.723 1304.72 447.281Z" fill="#743495" fill-opacity="0.25" />
                <path d="M969 587.5C924 592 839.5 595.5 799 589.5C789.486 588.09 795.466 589.627 784 586.5C773 583.5 771.5 581.5 771.5 581.5C771.5 581.5 784.438 584.963 790.918 585.441C797.458 585.968 804.008 586.379 810.563 586.672C816.02 586.877 820.863 586.945 824.751 586.672C839.553 585.784 857.152 584.758 871.612 582.23C877.274 581.341 885.612 579.413 891 577.5C892.092 577.09 893.456 576.679 894.957 576.201C936 574.5 962 572 962 572C962 572 964.293 578.479 969 587.5Z" fill="#743495" fill-opacity="0.75" />
                <path opacity="0.2" d="M709.465 839.199L724.359 839.593C719.464 841.315 714.495 841.085 709.465 839.199L-19.8845 819.894L-19.8835 757.404V716.289L-20.5574 716.578L-22 717.155L-21.2303 707.43L-19.7876 688.655L-18.1523 667.182C-18.1523 667.182 64.281 609.506 166.143 603.536C232.417 599.685 313.215 652.161 372.562 649.657C431.911 647.154 458.555 586.204 521.461 569.643C579.539 554.353 648.963 816.516 709.465 839.199Z" fill="#5A2489" />
                <path opacity="0.2" d="M755.995 840.457L773.526 840.921C768.05 842.848 762.183 842.568 755.995 840.457L-19.8845 819.894L-19.8835 757.404L-16.7097 715.133L-15.94 704.253L-14.8817 690.195C-14.8817 690.195 78.1322 624.623 179.994 630.304C263.486 634.926 315.523 687.691 374.872 685.188C434.219 682.684 467.212 619.616 530.215 603.151C587.719 588.012 690.118 817.983 755.995 840.457Z" fill="#5A2878" />
                <path d="M567 836.17L-33 842V817.321V744.884V697C-33 697 51.4749 702.623 74.5221 720.789C114.53 752.302 135.182 777.182 173.341 782.341C180.3 783.237 187.325 783.463 194.324 783.013C249.226 779.873 237.592 742.643 289.885 714.045C292.494 712.588 295.212 711.355 297.93 710.232C348.047 689.374 401.101 724.363 401.101 724.363L567 836.17Z" fill="url(#paint2_linear_24_67)" />
                <path d="M1409.98 799.41V852.271L-104 840.812C141.183 782.943 433.039 759.695 728.98 751.337C992.876 743.885 1177.39 769.176 1324.86 787.759C1353.52 791.322 1381.9 795.173 1409.98 799.41Z" fill="url(#paint3_linear_24_67)" />
                <g ref={moonRef}>
                    <path d="M833.885 374.545C833.885 391.973 819.825 406.076 802.447 406.076C799.878 406.076 797.361 405.789 794.902 405.159C778.045 400.974 767.755 383.889 771.928 366.977C776.102 350.066 793.135 339.746 809.991 343.931C823.992 347.428 833.826 360.041 833.885 374.545Z" fill="#381441" />
                    <path d="M833.885 374.545C833.885 391.973 819.825 406.076 802.447 406.076C799.878 406.076 797.361 405.789 794.902 405.159C780.843 394.954 777.647 375.232 787.82 361.13C791.475 356.028 796.571 352.143 802.45 349.977C808.328 347.81 814.719 347.462 820.796 348.976C828.968 354.881 833.885 364.398 833.885 374.545Z" fill="#211038" />
                </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear_24_67" x1="770.874" y1="521.388" x2="1348.41" y2="521.388" gradientUnits="userSpaceOnUse">
                    <stop offset="0.05" stop-color="#F973BE" />
                    <stop offset="0.45" stop-color="#743495" />
                    <stop offset="0.51" stop-color="#5A2878" />
                    <stop offset="0.58" stop-color="#3F1C59" />
                    <stop offset="0.66" stop-color="#2C1343" />
                    <stop offset="0.73" stop-color="#200E36" />
                    <stop offset="0.79" stop-color="#1C0C31" />
                </linearGradient>
                <linearGradient id="paint1_linear_24_67" x1="766.518" y1="518.569" x2="1348.4" y2="518.569" gradientUnits="userSpaceOnUse">
                    <stop offset="0.05" stop-color="#F9730A" />
                    <stop offset="0.45" stop-color="#743495" />
                    <stop offset="0.51" stop-color="#5A2878" />
                    <stop offset="0.58" stop-color="#3F1C59" />
                    <stop offset="0.66" stop-color="#2C1343" />
                    <stop offset="0.73" stop-color="#200E36" />
                    <stop offset="0.79" stop-color="#1C0C31" />
                </linearGradient>
                <linearGradient id="paint2_linear_24_67" x1="203.848" y1="549.835" x2="383.239" y2="1354.91" gradientUnits="userSpaceOnUse">
                    <stop offset="0.05" stop-color="#9133C2" />
                    <stop offset="0.37" stop-color="#26163A" />
                </linearGradient>
                <linearGradient id="paint3_linear_24_67" x1="640.304" y1="217.266" x2="663.91" y2="1341.58" gradientUnits="userSpaceOnUse">
                    <stop offset="0.43" stop-color="#9133C2" />
                    <stop offset="0.54" stop-color="#26163A" />
                </linearGradient>
                <clipPath id="clip0_24_67">
                    <rect width="1280" height="832" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default MoonBackgroundSvg;