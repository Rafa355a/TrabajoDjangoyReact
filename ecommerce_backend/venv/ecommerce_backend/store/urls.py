from django.urls import path
from .views import CategoryProductsView, ProductListView, ProductDetailView, CategoryListView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/products/', CategoryProductsView.as_view(), name='category-products'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]
