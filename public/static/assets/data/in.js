export const obj = {
  hostname: "scout-host",
  mgmt_iface_name: "enp0s3",
  mgmt_iface_ip: "10.154.76.38/23",
  mgmt_iface_gw: "10.154.76.1",
  mgmt_dns_ip: "8.8.8.8",
  ifaces: [
    { name: "enp7s0", type: "in", ip: null, dns_ip: null, gw: null },
    { name: "enp10s0", type: "in" },
    { name: "enp7s1", type: "out" },
    { name: "enp10s1", type: "out" },
    { name: "enp0s3", type: "mgmt", ip: "10.154.76.38/23", dns_ip: "8.8.8.8", gw: "10.154.76.1" },
  ],
  traf_in_iface_names: "enp7s0 enp10s0",
  traf_out_iface_names: "enp7s1 enp10s1",
  control_server_host: "mycontrolserver.local",
};

// export default obj;
