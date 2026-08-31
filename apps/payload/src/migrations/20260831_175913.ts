import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum_pages_blocks_hero_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum_pages_blocks_hero_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum_pages_blocks_button_row_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum_pages_blocks_button_row_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum_pages_blocks_button_row_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum_pages_blocks_feature_steps_steps_icon" AS ENUM('user-plus', 'share-2', 'calendar-check', 'dumbbell', 'star', 'check', 'search', 'heart');
  CREATE TYPE "public"."enum_pages_blocks_trainer_grid_mode" AS ENUM('featured', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_cta_band_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum_pages_blocks_cta_band_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum_pages_blocks_cta_band_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum_pages_blocks_container_width" AS ENUM('content', 'narrow', 'full');
  CREATE TYPE "public"."enum_pages_blocks_container_layout" AS ENUM('stack', 'grid', 'none');
  CREATE TYPE "public"."enum_pages_blocks_container_gap" AS ENUM('none', 'gutter', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_container_spacing_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_container_spacing_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_container_inner_spacing_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_container_inner_spacing_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_container_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_container_background" AS ENUM('default', 'sunk', 'secondary', 'inverse', 'none');
  CREATE TYPE "public"."enum_pages_blocks_container_border" AS ENUM('none', 'top', 'bottom', 'y');
  CREATE TYPE "public"."enum_pages_blocks_container_border_color" AS ENUM('default', 'subtle');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum__pages_v_blocks_button_row_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_button_row_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum__pages_v_blocks_button_row_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_steps_steps_icon" AS ENUM('user-plus', 'share-2', 'calendar-check', 'dumbbell', 'star', 'check', 'search', 'heart');
  CREATE TYPE "public"."enum__pages_v_blocks_trainer_grid_mode" AS ENUM('featured', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_band_buttons_link_type" AS ENUM('reference', 'custom', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_band_buttons_target" AS ENUM('_self', '_blank');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_band_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'danger', 'inverse');
  CREATE TYPE "public"."enum__pages_v_blocks_container_width" AS ENUM('content', 'narrow', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_container_layout" AS ENUM('stack', 'grid', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_container_gap" AS ENUM('none', 'gutter', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_container_spacing_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_container_spacing_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_container_inner_spacing_top" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_container_inner_spacing_bottom" AS ENUM('none', 'xs', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_container_theme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_container_background" AS ENUM('default', 'sunk', 'secondary', 'inverse', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_container_border" AS ENUM('none', 'top', 'bottom', 'y');
  CREATE TYPE "public"."enum__pages_v_blocks_container_border_color" AS ENUM('default', 'subtle');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_trainers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__trainers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_trainer_applications_status" AS ENUM('new', 'reviewed', 'accepted', 'declined');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum_pages_blocks_hero_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum_pages_blocks_hero_buttons_target",
  	"variant" "enum_pages_blocks_hero_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_button_row_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum_pages_blocks_button_row_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum_pages_blocks_button_row_buttons_target",
  	"variant" "enum_pages_blocks_button_row_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_button_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_row_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_feature_steps_steps_icon" DEFAULT 'user-plus',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_trainer_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"mode" "enum_pages_blocks_trainer_grid_mode" DEFAULT 'featured',
  	"limit" numeric DEFAULT 6,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_band_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum_pages_blocks_cta_band_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum_pages_blocks_cta_band_buttons_target",
  	"variant" "enum_pages_blocks_cta_band_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_cta_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"width" "enum_pages_blocks_container_width" DEFAULT 'full',
  	"layout" "enum_pages_blocks_container_layout" DEFAULT 'none',
  	"gap" "enum_pages_blocks_container_gap",
  	"bleed" boolean DEFAULT true,
  	"mobile_bleed" boolean DEFAULT false,
  	"spacing_top" "enum_pages_blocks_container_spacing_top",
  	"spacing_bottom" "enum_pages_blocks_container_spacing_bottom",
  	"inner_spacing_top" "enum_pages_blocks_container_inner_spacing_top",
  	"inner_spacing_bottom" "enum_pages_blocks_container_inner_spacing_bottom",
  	"theme" "enum_pages_blocks_container_theme",
  	"background" "enum_pages_blocks_container_background" DEFAULT 'none',
  	"border" "enum_pages_blocks_container_border" DEFAULT 'none',
  	"border_color" "enum_pages_blocks_container_border_color" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"trainers_id" integer,
  	"specialties_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_hero_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum__pages_v_blocks_hero_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum__pages_v_blocks_hero_buttons_target",
  	"variant" "enum__pages_v_blocks_hero_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_row_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum__pages_v_blocks_button_row_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum__pages_v_blocks_button_row_buttons_target",
  	"variant" "enum__pages_v_blocks_button_row_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_row_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_feature_steps_steps_icon" DEFAULT 'user-plus',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_trainer_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"mode" "enum__pages_v_blocks_trainer_grid_mode" DEFAULT 'featured',
  	"limit" numeric DEFAULT 6,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_band_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link_type" "enum__pages_v_blocks_cta_band_buttons_link_type" DEFAULT 'reference',
  	"link_path" varchar,
  	"link_url" varchar,
  	"target" "enum__pages_v_blocks_cta_band_buttons_target",
  	"variant" "enum__pages_v_blocks_cta_band_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"width" "enum__pages_v_blocks_container_width" DEFAULT 'full',
  	"layout" "enum__pages_v_blocks_container_layout" DEFAULT 'none',
  	"gap" "enum__pages_v_blocks_container_gap",
  	"bleed" boolean DEFAULT true,
  	"mobile_bleed" boolean DEFAULT false,
  	"spacing_top" "enum__pages_v_blocks_container_spacing_top",
  	"spacing_bottom" "enum__pages_v_blocks_container_spacing_bottom",
  	"inner_spacing_top" "enum__pages_v_blocks_container_inner_spacing_top",
  	"inner_spacing_bottom" "enum__pages_v_blocks_container_inner_spacing_bottom",
  	"theme" "enum__pages_v_blocks_container_theme",
  	"background" "enum__pages_v_blocks_container_background" DEFAULT 'none',
  	"border" "enum__pages_v_blocks_container_border" DEFAULT 'none',
  	"border_color" "enum__pages_v_blocks_container_border_color" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"trainers_id" integer,
  	"specialties_id" integer
  );
  
  CREATE TABLE "specialties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "trainers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"headline" varchar,
  	"bio" jsonb,
  	"location" varchar,
  	"photo_id" integer,
  	"rating" numeric,
  	"review_count" numeric,
  	"price_per_session" numeric,
  	"verified" boolean DEFAULT false,
  	"available" boolean DEFAULT false,
  	"featured" boolean DEFAULT false,
  	"email" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_trainers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "trainers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"specialties_id" integer
  );
  
  CREATE TABLE "_trainers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_headline" varchar,
  	"version_bio" jsonb,
  	"version_location" varchar,
  	"version_photo_id" integer,
  	"version_rating" numeric,
  	"version_review_count" numeric,
  	"version_price_per_session" numeric,
  	"version_verified" boolean DEFAULT false,
  	"version_available" boolean DEFAULT false,
  	"version_featured" boolean DEFAULT false,
  	"version_email" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__trainers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_trainers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"specialties_id" integer
  );
  
  CREATE TABLE "trainer_applications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"specialties" varchar,
  	"message" varchar,
  	"status" "enum_trainer_applications_status" DEFAULT 'new',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"specialties_id" integer,
  	"trainers_id" integer,
  	"trainer_applications_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_buttons" ADD CONSTRAINT "pages_blocks_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_row_buttons" ADD CONSTRAINT "pages_blocks_button_row_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_button_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_row" ADD CONSTRAINT "pages_blocks_button_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_row_stats" ADD CONSTRAINT "pages_blocks_stats_row_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_row" ADD CONSTRAINT "pages_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_steps_steps" ADD CONSTRAINT "pages_blocks_feature_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_steps" ADD CONSTRAINT "pages_blocks_feature_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trainer_grid" ADD CONSTRAINT "pages_blocks_trainer_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_accordion_items" ADD CONSTRAINT "pages_blocks_faq_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_accordion" ADD CONSTRAINT "pages_blocks_faq_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band_buttons" ADD CONSTRAINT "pages_blocks_cta_band_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band" ADD CONSTRAINT "pages_blocks_cta_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_container" ADD CONSTRAINT "pages_blocks_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_trainers_fk" FOREIGN KEY ("trainers_id") REFERENCES "public"."trainers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_row_buttons" ADD CONSTRAINT "_pages_v_blocks_button_row_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_button_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_row" ADD CONSTRAINT "_pages_v_blocks_button_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_row_stats" ADD CONSTRAINT "_pages_v_blocks_stats_row_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_row" ADD CONSTRAINT "_pages_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_steps_steps" ADD CONSTRAINT "_pages_v_blocks_feature_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_steps" ADD CONSTRAINT "_pages_v_blocks_feature_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_trainer_grid" ADD CONSTRAINT "_pages_v_blocks_trainer_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_accordion_items" ADD CONSTRAINT "_pages_v_blocks_faq_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_accordion" ADD CONSTRAINT "_pages_v_blocks_faq_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_band_buttons" ADD CONSTRAINT "_pages_v_blocks_cta_band_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_band" ADD CONSTRAINT "_pages_v_blocks_cta_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_container" ADD CONSTRAINT "_pages_v_blocks_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_trainers_fk" FOREIGN KEY ("trainers_id") REFERENCES "public"."trainers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trainers" ADD CONSTRAINT "trainers_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "trainers_rels" ADD CONSTRAINT "trainers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trainers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trainers_rels" ADD CONSTRAINT "trainers_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trainers_v" ADD CONSTRAINT "_trainers_v_parent_id_trainers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trainers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_trainers_v" ADD CONSTRAINT "_trainers_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_trainers_v_rels" ADD CONSTRAINT "_trainers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_trainers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trainers_v_rels" ADD CONSTRAINT "_trainers_v_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_specialties_fk" FOREIGN KEY ("specialties_id") REFERENCES "public"."specialties"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trainers_fk" FOREIGN KEY ("trainers_id") REFERENCES "public"."trainers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trainer_applications_fk" FOREIGN KEY ("trainer_applications_id") REFERENCES "public"."trainer_applications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "pages_blocks_hero_buttons_order_idx" ON "pages_blocks_hero_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_buttons_parent_id_idx" ON "pages_blocks_hero_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_button_row_buttons_order_idx" ON "pages_blocks_button_row_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_row_buttons_parent_id_idx" ON "pages_blocks_button_row_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_row_order_idx" ON "pages_blocks_button_row" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_row_parent_id_idx" ON "pages_blocks_button_row" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_row_path_idx" ON "pages_blocks_button_row" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_row_stats_order_idx" ON "pages_blocks_stats_row_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_row_stats_parent_id_idx" ON "pages_blocks_stats_row_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_row_order_idx" ON "pages_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_row_parent_id_idx" ON "pages_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_row_path_idx" ON "pages_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_steps_steps_order_idx" ON "pages_blocks_feature_steps_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_steps_steps_parent_id_idx" ON "pages_blocks_feature_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_steps_order_idx" ON "pages_blocks_feature_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_steps_parent_id_idx" ON "pages_blocks_feature_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_steps_path_idx" ON "pages_blocks_feature_steps" USING btree ("_path");
  CREATE INDEX "pages_blocks_trainer_grid_order_idx" ON "pages_blocks_trainer_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_trainer_grid_parent_id_idx" ON "pages_blocks_trainer_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trainer_grid_path_idx" ON "pages_blocks_trainer_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_accordion_items_order_idx" ON "pages_blocks_faq_accordion_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_accordion_items_parent_id_idx" ON "pages_blocks_faq_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_accordion_order_idx" ON "pages_blocks_faq_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_accordion_parent_id_idx" ON "pages_blocks_faq_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_accordion_path_idx" ON "pages_blocks_faq_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_band_buttons_order_idx" ON "pages_blocks_cta_band_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_band_buttons_parent_id_idx" ON "pages_blocks_cta_band_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_band_order_idx" ON "pages_blocks_cta_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_band_parent_id_idx" ON "pages_blocks_cta_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_band_path_idx" ON "pages_blocks_cta_band" USING btree ("_path");
  CREATE INDEX "pages_blocks_container_order_idx" ON "pages_blocks_container" USING btree ("_order");
  CREATE INDEX "pages_blocks_container_parent_id_idx" ON "pages_blocks_container" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_container_path_idx" ON "pages_blocks_container" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_trainers_id_idx" ON "pages_rels" USING btree ("trainers_id");
  CREATE INDEX "pages_rels_specialties_id_idx" ON "pages_rels" USING btree ("specialties_id");
  CREATE INDEX "_pages_v_blocks_hero_buttons_order_idx" ON "_pages_v_blocks_hero_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_buttons_parent_id_idx" ON "_pages_v_blocks_hero_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_button_row_buttons_order_idx" ON "_pages_v_blocks_button_row_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_row_buttons_parent_id_idx" ON "_pages_v_blocks_button_row_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_row_order_idx" ON "_pages_v_blocks_button_row" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_row_parent_id_idx" ON "_pages_v_blocks_button_row" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_row_path_idx" ON "_pages_v_blocks_button_row" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_row_stats_order_idx" ON "_pages_v_blocks_stats_row_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_row_stats_parent_id_idx" ON "_pages_v_blocks_stats_row_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_row_order_idx" ON "_pages_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_row_parent_id_idx" ON "_pages_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_row_path_idx" ON "_pages_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature_steps_steps_order_idx" ON "_pages_v_blocks_feature_steps_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_steps_steps_parent_id_idx" ON "_pages_v_blocks_feature_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_steps_order_idx" ON "_pages_v_blocks_feature_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_steps_parent_id_idx" ON "_pages_v_blocks_feature_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_steps_path_idx" ON "_pages_v_blocks_feature_steps" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_trainer_grid_order_idx" ON "_pages_v_blocks_trainer_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_trainer_grid_parent_id_idx" ON "_pages_v_blocks_trainer_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_trainer_grid_path_idx" ON "_pages_v_blocks_trainer_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_accordion_items_order_idx" ON "_pages_v_blocks_faq_accordion_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_accordion_items_parent_id_idx" ON "_pages_v_blocks_faq_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_accordion_order_idx" ON "_pages_v_blocks_faq_accordion" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_accordion_parent_id_idx" ON "_pages_v_blocks_faq_accordion" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_accordion_path_idx" ON "_pages_v_blocks_faq_accordion" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_band_buttons_order_idx" ON "_pages_v_blocks_cta_band_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_band_buttons_parent_id_idx" ON "_pages_v_blocks_cta_band_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_band_order_idx" ON "_pages_v_blocks_cta_band" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_band_parent_id_idx" ON "_pages_v_blocks_cta_band" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_band_path_idx" ON "_pages_v_blocks_cta_band" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_container_order_idx" ON "_pages_v_blocks_container" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_container_parent_id_idx" ON "_pages_v_blocks_container" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_container_path_idx" ON "_pages_v_blocks_container" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_trainers_id_idx" ON "_pages_v_rels" USING btree ("trainers_id");
  CREATE INDEX "_pages_v_rels_specialties_id_idx" ON "_pages_v_rels" USING btree ("specialties_id");
  CREATE UNIQUE INDEX "specialties_slug_idx" ON "specialties" USING btree ("slug");
  CREATE INDEX "specialties_updated_at_idx" ON "specialties" USING btree ("updated_at");
  CREATE INDEX "specialties_created_at_idx" ON "specialties" USING btree ("created_at");
  CREATE UNIQUE INDEX "trainers_slug_idx" ON "trainers" USING btree ("slug");
  CREATE INDEX "trainers_location_idx" ON "trainers" USING btree ("location");
  CREATE INDEX "trainers_photo_idx" ON "trainers" USING btree ("photo_id");
  CREATE INDEX "trainers_updated_at_idx" ON "trainers" USING btree ("updated_at");
  CREATE INDEX "trainers_created_at_idx" ON "trainers" USING btree ("created_at");
  CREATE INDEX "trainers__status_idx" ON "trainers" USING btree ("_status");
  CREATE INDEX "trainers_rels_order_idx" ON "trainers_rels" USING btree ("order");
  CREATE INDEX "trainers_rels_parent_idx" ON "trainers_rels" USING btree ("parent_id");
  CREATE INDEX "trainers_rels_path_idx" ON "trainers_rels" USING btree ("path");
  CREATE INDEX "trainers_rels_specialties_id_idx" ON "trainers_rels" USING btree ("specialties_id");
  CREATE INDEX "_trainers_v_parent_idx" ON "_trainers_v" USING btree ("parent_id");
  CREATE INDEX "_trainers_v_version_version_slug_idx" ON "_trainers_v" USING btree ("version_slug");
  CREATE INDEX "_trainers_v_version_version_location_idx" ON "_trainers_v" USING btree ("version_location");
  CREATE INDEX "_trainers_v_version_version_photo_idx" ON "_trainers_v" USING btree ("version_photo_id");
  CREATE INDEX "_trainers_v_version_version_updated_at_idx" ON "_trainers_v" USING btree ("version_updated_at");
  CREATE INDEX "_trainers_v_version_version_created_at_idx" ON "_trainers_v" USING btree ("version_created_at");
  CREATE INDEX "_trainers_v_version_version__status_idx" ON "_trainers_v" USING btree ("version__status");
  CREATE INDEX "_trainers_v_created_at_idx" ON "_trainers_v" USING btree ("created_at");
  CREATE INDEX "_trainers_v_updated_at_idx" ON "_trainers_v" USING btree ("updated_at");
  CREATE INDEX "_trainers_v_latest_idx" ON "_trainers_v" USING btree ("latest");
  CREATE INDEX "_trainers_v_rels_order_idx" ON "_trainers_v_rels" USING btree ("order");
  CREATE INDEX "_trainers_v_rels_parent_idx" ON "_trainers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_trainers_v_rels_path_idx" ON "_trainers_v_rels" USING btree ("path");
  CREATE INDEX "_trainers_v_rels_specialties_id_idx" ON "_trainers_v_rels" USING btree ("specialties_id");
  CREATE INDEX "trainer_applications_updated_at_idx" ON "trainer_applications" USING btree ("updated_at");
  CREATE INDEX "trainer_applications_created_at_idx" ON "trainer_applications" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_specialties_id_idx" ON "payload_locked_documents_rels" USING btree ("specialties_id");
  CREATE INDEX "payload_locked_documents_rels_trainers_id_idx" ON "payload_locked_documents_rels" USING btree ("trainers_id");
  CREATE INDEX "payload_locked_documents_rels_trainer_applications_id_idx" ON "payload_locked_documents_rels" USING btree ("trainer_applications_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_hero_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_button_row_buttons" CASCADE;
  DROP TABLE "pages_blocks_button_row" CASCADE;
  DROP TABLE "pages_blocks_stats_row_stats" CASCADE;
  DROP TABLE "pages_blocks_stats_row" CASCADE;
  DROP TABLE "pages_blocks_feature_steps_steps" CASCADE;
  DROP TABLE "pages_blocks_feature_steps" CASCADE;
  DROP TABLE "pages_blocks_trainer_grid" CASCADE;
  DROP TABLE "pages_blocks_faq_accordion_items" CASCADE;
  DROP TABLE "pages_blocks_faq_accordion" CASCADE;
  DROP TABLE "pages_blocks_cta_band_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta_band" CASCADE;
  DROP TABLE "pages_blocks_container" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_button_row_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_button_row" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_row_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_row" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_steps_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_trainer_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_accordion_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_accordion" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_band_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_band" CASCADE;
  DROP TABLE "_pages_v_blocks_container" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "specialties" CASCADE;
  DROP TABLE "trainers" CASCADE;
  DROP TABLE "trainers_rels" CASCADE;
  DROP TABLE "_trainers_v" CASCADE;
  DROP TABLE "_trainers_v_rels" CASCADE;
  DROP TABLE "trainer_applications" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_hero_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_buttons_target";
  DROP TYPE "public"."enum_pages_blocks_hero_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_button_row_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_button_row_buttons_target";
  DROP TYPE "public"."enum_pages_blocks_button_row_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_feature_steps_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_trainer_grid_mode";
  DROP TYPE "public"."enum_pages_blocks_cta_band_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_band_buttons_target";
  DROP TYPE "public"."enum_pages_blocks_cta_band_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_container_width";
  DROP TYPE "public"."enum_pages_blocks_container_layout";
  DROP TYPE "public"."enum_pages_blocks_container_gap";
  DROP TYPE "public"."enum_pages_blocks_container_spacing_top";
  DROP TYPE "public"."enum_pages_blocks_container_spacing_bottom";
  DROP TYPE "public"."enum_pages_blocks_container_inner_spacing_top";
  DROP TYPE "public"."enum_pages_blocks_container_inner_spacing_bottom";
  DROP TYPE "public"."enum_pages_blocks_container_theme";
  DROP TYPE "public"."enum_pages_blocks_container_background";
  DROP TYPE "public"."enum_pages_blocks_container_border";
  DROP TYPE "public"."enum_pages_blocks_container_border_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_hero_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_buttons_target";
  DROP TYPE "public"."enum__pages_v_blocks_hero_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_button_row_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_button_row_buttons_target";
  DROP TYPE "public"."enum__pages_v_blocks_button_row_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_feature_steps_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_trainer_grid_mode";
  DROP TYPE "public"."enum__pages_v_blocks_cta_band_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_band_buttons_target";
  DROP TYPE "public"."enum__pages_v_blocks_cta_band_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_container_width";
  DROP TYPE "public"."enum__pages_v_blocks_container_layout";
  DROP TYPE "public"."enum__pages_v_blocks_container_gap";
  DROP TYPE "public"."enum__pages_v_blocks_container_spacing_top";
  DROP TYPE "public"."enum__pages_v_blocks_container_spacing_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_container_inner_spacing_top";
  DROP TYPE "public"."enum__pages_v_blocks_container_inner_spacing_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_container_theme";
  DROP TYPE "public"."enum__pages_v_blocks_container_background";
  DROP TYPE "public"."enum__pages_v_blocks_container_border";
  DROP TYPE "public"."enum__pages_v_blocks_container_border_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_trainers_status";
  DROP TYPE "public"."enum__trainers_v_version_status";
  DROP TYPE "public"."enum_trainer_applications_status";`)
}
