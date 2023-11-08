import { RequestHandler } from "express";

import { catchAsync, sendEmail } from "../shared/utils/";

import { Customer } from "../schemas/";

export const getCustomers: RequestHandler = catchAsync(async (req, res) => {
  const { limit, offset } = req.query as {
    limit: string;
    offset: string;
  };

  const [customers, count] = await Promise.all([
    Customer.find({})
      .skip(+offset ?? 0)
      .limit(+limit ?? 100),
    Customer.countDocuments(),
  ]);

  return res.status(200).json({
    meta: { total: count, resources: count, offset: +(offset ?? 0) },
    data: customers,
  });
});

export const createCustomer: RequestHandler = catchAsync(async (req, res) => {
  const payload = req.body as {
    name: string;
    email: string;
    phone: string;
  };
  // const newCustomer = await Customer.create(payload);

  await sendEmail(
    payload.email,
    `Welcome aboard!`,
    `It's a pleasure to have you here with us ${payload.name}`
  );

  return res.status(201).json({ ok: true });
});
