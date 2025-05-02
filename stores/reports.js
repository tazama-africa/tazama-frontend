import { defineStore } from "pinia";
import { musicService } from "@/services/musicService";
import { reportService } from "~/services/reportService";
import { format, isToday, isYesterday, subDays, subMonths, isAfter } from 'date-fns'; // Install date-fns if you haven't
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const useReportStore = defineStore("report", {
  state: () => ({
    payload: [],
    report: [],
    reports: [],
    history: [],
    preffered_genre: [],
    liked_songs:[],
    filteredHistory: [], // <--- NEW: this will store the filtered history
    searchQuery: '',
    dateFilter: 'all', // 'yesterday', 'last7days', 'lastMonth', 'all'
    loading: false,
    error: null,
  }),
  actions: {
    async postReport(payload) {
      try {
        const postReport = await reportService.PostReport(payload);
        // Toast.fire({
        //   icon: "success",
        //   title: "Song liked successfully",
        // });
      } catch (error) {
        this.error = "Failed to like song";
        Toast.fire({
          icon: "error",
          title: "Failed to submit report",
        });
      }
    },
    async getReportStore() {
      try {
        const response = await reportService.getReport();
        this.reports = response.reports; // make sure your API sends { reports: [...] }
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      }
    },
    async getHistoryStore() {
      try {
        const response = await reportService.getHistory();
        this.history = response.history;
        console.log(response)
        this.applyDateFilter(); // Automatically apply current filter
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    },
    async getLikedSongsStore() {
      try {
        const response = await reportService.getLikedSongs();
        this.liked_songs = response.liked_songs;
        console.log(response)
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    },
    async getPrefferedGenreStore() {
      try {
        const response = await reportService.getPrefferedGenre();
        this.preffered_genre = response.genres;
        console.log(response)
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    },

    applyDateFilter() {
      if (!this.history.length) {
        this.filteredHistory = [];
        return;
      }

      const today = new Date();
      let filtered = [];

      switch (this.dateFilter) {
        case 'today':
          filtered = this.history.filter(item => {
            return isToday(new Date(item.timeStart)); // Assume your item has `created_at`
          });
          break;
        case 'yesterday':
          filtered = this.history.filter(item => {
            return isYesterday(new Date(item.timeStart));
          });
          break;
        case 'last7days':
          filtered = this.history.filter(item => {
            return isAfter(new Date(item.timeStart), subDays(today, 7));
          });
          break;
        case 'lastMonth':
          filtered = this.history.filter(item => {
            return isAfter(new Date(item.timeStart), subMonths(today, 1));
          });
          break;
        case 'all':
        default:
          filtered = [...this.history]; // all items
      }

      this.filteredHistory = filtered;
    },

    changeDateFilter(newFilter) {
      this.dateFilter = newFilter;
      this.applyDateFilter();
    },
  

    setDateFilter(filter) {
      this.dateFilter = filter;
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    },  
    async deleteReport(id) {
      try {
        await reportService.deleteReport(id); // Call the delete API
        await this.getReportStore(); // Refresh the reports list from the server
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Report Deleted successfully',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'modern-swal-popup',
            title: 'modern-swal-title',
            content: 'modern-swal-content',
            confirmButton: 'modern-swal-confirm',
          },
          timer: 3000,
          timerProgressBar: true,
        });
      } catch (error) {
        // this.error = "Failed to delete report";
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Report Deleted successfully',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'modern-swal-popup',
            title: 'modern-swal-title',
            content: 'modern-swal-content',
            confirmButton: 'modern-swal-confirm',
          },
          timer: 2000,
          timerProgressBar: true,
        });
      }
    },
    async deleteHistory(id) {
      try {
        await reportService.deleteHistory(id); // Call the delete API
        await this.getHistoryStore(); // Refresh the reports list from the server
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'History Deleted successfully',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'modern-swal-popup',
            title: 'modern-swal-title',
            content: 'modern-swal-content',
            confirmButton: 'modern-swal-confirm',
          },
          timer: 3000,
          timerProgressBar: true,
        });
      } catch (error) {
        // this.error = "Failed to delete report";
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'History Deleted successfully',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'modern-swal-popup',
            title: 'modern-swal-title',
            content: 'modern-swal-content',
            confirmButton: 'modern-swal-confirm',
          },
          timer: 2000,
          timerProgressBar: true,
        });
      }
    },
  },
  getters: {
    filteredReports(state) {
      const now = new Date();
      let filtered = [...state.reports];

      // Date filter
      if (state.dateFilter !== 'all') {
        filtered = filtered.filter(report => {
          const createdAt = new Date(report.createdAt);
          if (state.dateFilter === 'yesterday') {
            const yesterday = new Date();
            yesterday.setDate(now.getDate() - 1);
            return createdAt.toDateString() === yesterday.toDateString();
          }
          if (state.dateFilter === 'last7days') {
            const last7Days = new Date();
            last7Days.setDate(now.getDate() - 7);
            return createdAt >= last7Days;
          }
          if (state.dateFilter === 'lastMonth') {
            const lastMonth = new Date();
            lastMonth.setMonth(now.getMonth() - 1);
            return createdAt >= lastMonth;
          }
          return true;
        });
      }

      // Search filter
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(report => {
          return (
            report.issue?.toLowerCase().includes(query) ||
            report.details?.toLowerCase().includes(query) ||
            report.fleetNo?.toString().includes(query)
          );
        });
      }

      return filtered;
    }
  },
});
