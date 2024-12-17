import { IconlyIconProps } from '../types/icons.type';

export const IconEye = ({
  size = 24,
  color = '#000000',
}: IconlyIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.9972 19C8.27467 19 4.93239 16.4801 3.0568 12.2638C3.01933 12.1804 3 12.0905 3 11.9996C3 11.9086 3.01933 11.8187 3.0568 11.7353C4.93424 7.51815 8.27652 5 11.9982 5C15.7198 5 19.0658 7.51815 20.9432 11.7353C20.9807 11.8187 21 11.9086 21 11.9996C21 12.0905 20.9807 12.1804 20.9432 12.2638C19.0667 16.4801 15.7244 18.9973 12.0028 19H11.9972ZM4.44503 12C6.11201 15.5513 8.91802 17.662 11.9954 17.6629C15.0728 17.6638 17.8778 15.5513 19.5457 12C17.8769 8.44785 15.0709 6.33707 11.9935 6.33707C8.91617 6.33707 6.1148 8.44785 4.44689 12H4.44503Z'
        fill={color}
      ></path>
      <path
        d='M11.9973 15.4142C11.2988 15.4142 10.616 15.2142 10.0352 14.8394C9.45445 14.4646 9.00182 13.9319 8.73456 13.3087C8.46729 12.6855 8.39741 11.9997 8.53374 11.3381C8.67008 10.6765 9.00652 10.0689 9.5005 9.59196C9.99448 9.11504 10.6238 8.7903 11.3089 8.65881C11.994 8.52732 12.7041 8.59498 13.3494 8.85324C13.9947 9.1115 14.5462 9.54876 14.9341 10.1097C15.322 10.6707 15.529 11.3301 15.5288 12.0047C15.5274 12.9087 15.1548 13.7752 14.4928 14.4143C13.8308 15.0535 12.9334 15.413 11.9973 15.4142V15.4142ZM11.9973 9.93045C11.5727 9.93045 11.1577 10.052 10.8046 10.2798C10.4516 10.5076 10.1764 10.8314 10.0139 11.2102C9.85135 11.589 9.80878 12.0058 9.89155 12.408C9.97432 12.8101 10.1787 13.1796 10.4789 13.4696C10.779 13.7596 11.1615 13.9571 11.5779 14.0372C11.9943 14.1173 12.426 14.0764 12.8183 13.9196C13.2106 13.7628 13.546 13.4972 13.782 13.1563C14.018 12.8155 14.1441 12.4147 14.1443 12.0047C14.1435 11.4549 13.9171 10.9279 13.5147 10.5391C13.1122 10.1503 12.5666 9.9314 11.9973 9.93045V9.93045Z'
        fill={color}
      ></path>
    </svg>
  );
};
