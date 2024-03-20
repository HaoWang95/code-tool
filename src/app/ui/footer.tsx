export default function AppFooter() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white text-center py-4">
      © {new Date().getFullYear()} CCA bench prototype on Gen AI. No rights
      reserved, have fun.
    </footer>
  );
}
