import { Photon } from "@generated/photon";

const photon = new Photon();

async function main() {
  const customers = await photon.customers.findMany({
    first: 1,
    include: {
      invoices: {
        include: {
          invoiceItems: {
            include: {
              track: true
            }
          }
        }
      }
    }
  });
  console.log(JSON.stringify(customers));

  await photon.disconnect();
}

main();
