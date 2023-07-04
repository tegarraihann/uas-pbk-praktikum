<template>
    <div class="financial-widget">
      <h2 class="widget-title">Pencatatan Keuangan</h2>
      <div class="transaction-form">
        <label for="description">Deskripsi:</label>
        <input type="text" id="description" v-model="transaction.description" />
  
        <label for="amount">Jumlah:</label>
        <input type="number" id="amount" v-model="transaction.amount" />
  
        <label for="price">Harga:</label>
        <input type="number" id="price" v-model="transaction.price" />
  
        <button @click="addTransaction">Tambah Transaksi</button>
      </div>
  
      <div v-if="transactions.length > 0" class="transaction-list">
        <h3>Riwayat Transaksi</h3>
        <table>
          <thead>
            <tr>
              <th>Deskripsi</th>
              <th>Jumlah</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{ transaction.description }}</td>
              <td>{{ transaction.amount }}</td>
              <td>{{ transaction.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <p v-else>Belum ada transaksi.</p>
    </div>
  </template>

  <style>
  table{
    border:1px solid black;
    display: inline-block;
    justify-content: center;
  }

  th,td{
    border:1px solid black;
  }

</style>
  
  <script>
  export default {
    data() {
      return {
        transaction: {
          description: '',
          amount: 0,
          price: 0
        },
        transactions: []
      };
    },
    methods: {
      addTransaction() {
        const newTransaction = { ...this.transaction };
        this.transactions.push(newTransaction);
  
        // Reset form fields
        this.transaction.description = '';
        this.transaction.amount = 0;
        this.transaction.price = 0;
      }
    }
  };
  </script>
  