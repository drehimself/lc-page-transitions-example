import Image from 'next/image';

export default function Product() {
  return (
    <div className="center">
      <Image
        src="/ipad.jpg"
        alt="ipad thumbnail"
        width={500}
        height={500}
        className="shared-element full-image"
      />
      <h2>iPad 3000</h2>
      <div>
        Description of iPad. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ipsam at, quo quasi in rerum dignissimos porro inventore laborum,
        dolor odit natus distinctio sit explicabo adipisci nesciunt ex
        reiciendis unde optio!
      </div>
    </div>
  );
}
