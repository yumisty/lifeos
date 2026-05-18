// ============================================
// 历史记账数据迁移脚本
// 使用方法：在浏览器控制台粘贴运行
// ============================================

(function() {
  // 1. 从备份JSON文件读取的数据结构
  // 把 Backup_2026-05-13.json 文件内容整个粘贴到这里替换 BACKUP_JSON
  const raw = BACKUP_JSON;

  // 2. 提取 transactions（413条真实记录）
  const transactions = raw.transactions || [];

  // 3. 提取分类
  const categories = raw.categories || [];

  // 4. 提取固定收支
  const fixedItemsByMonth = raw.fixedItemsByMonth || {};

  // 5. 提取心愿单
  const wishlist = raw.wishlist || [];

  // 6. 提取库存
  const inventory = raw.inventory || [];

  // 7. 写入 Life OS 的 localStorage key
  const STORAGE_KEY = 'visualLifeOS_data';

  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const merged = {
    ...existing,
    transactions: transactions,
    categories: categories,
    fixedItemsByMonth: fixedItemsByMonth,
    wishlist: wishlist,
    inventory: inventory,
    exchangeRate: raw.exchangeRate || 0.05,
    monthlyRates: raw.monthlyRates || {},
    migratedAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

  console.log('✅ 迁移完成！');
  console.log('📊 交易记录：' + transactions.length + ' 条');
  console.log('🏷️ 分类：' + categories.length + ' 个');
  console.log('📦 库存：' + inventory.length + ' 条');
  console.log('💝 心愿单：' + wishlist.length + ' 条');
})();
