import Container from "@/components/Container";
import Image from "next/image";
import LawyerImage from "../../assets/img/lawyers.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <h3 className="text-3xl font-bold text-primary mb-7">Tentang Kami</h3>
        <div className="flex gap-5 justify-between items-center">
          <section className="w-1/3">
            <Image
              src={LawyerImage}
              className="rounded-md"
              alt="PT Blambangan Mandiri Sejahtera"
            />
          </section>
          <section className="w-2/3">
            <p className="font-bold text-primary text-2xl mb-3">
              PT BLAMBANGAN MANDIRI SEJAHTERA
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              velit deleniti odit soluta recusandae perferendis? Ipsum aliquam
              ipsa recusandae nesciunt omnis saepe aperiam dignissimos quas
              labore adipisci ducimus sequi, quidem reiciendis eligendi delectus
              rem iure est temporibus voluptatem suscipit quae! Nam ut veniam,
              tenetur soluta voluptatum corporis necessitatibus laborum labore!
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
