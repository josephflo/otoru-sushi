import AuthForm from "@/components/AuthForm";

const Admin = () => {
  return (
    <div className="flex min-h-screen">
      <section className="otoru-gradient p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          {/* <Image
            src="/assets/icons/logo-full.svg"
            width={224}
            height={82}
            alt="logo"
            className="h-auto"
          /> */}
          <h1 className="text-[34px] leading-10.5 font-bold">OTORU SUSHI</h1>
          <div className="space-y-5 text-white">
            <h1 className="text-[34px] leading-10.5 font-bold">
              Bienvenido a Otoru Sushi Panel Admin
            </h1>
            <p className="text-[16px] leading-6 font-normal;">
              Otoru Sushi es un restaurante de sushi de alta calidad que ofrece
              una experiencia culinaria única. Nuestro panel de administración
              te permite gestionar fácilmente tu menú, pedidos y reservas para
              brindar un servicio excepcional a tus clientes.
            </p>
          </div>
          {/* <Image
            src="/lanubecita.png"
            width={548}
            height={548}
            alt="cloud"
            className="transition-all hover:rotate-2 hover:scale-105"
          /> */}
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          {/* <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          /> */}
        </div>
        <AuthForm type="sign-in" />
      </section>
    </div>
  );
};

export default Admin;
